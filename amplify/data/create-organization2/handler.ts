import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../resource'
import { Amplify } from 'aws-amplify'
import { env } from '$amplify/env/create-organization2'
import { listOrganizationMemberByOwner } from './graphql/queries.js'
import {
  createOrganization,
  createOrganizationMember,
} from './graphql/mutations.js'

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: 'iam',
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
)

const client = generateClient<Schema>({
  authMode: 'iam',
})

export const handler: Schema['createOrganization2']['functionHandler'] = async (
  event,
  context
) => {
  const identity = event.identity as { sub: string }

  if (!(await isMemberOfAnOrganization(identity))) {
    const { data, errors: createOrganizationErrors } = await client.graphql({
      query: createOrganization,
      variables: {
        input: {
          owner: identity.sub, // TODO: :: username
        },
      },
    })
    const organization = data.createOrganization
    if (organization) {
      const { data, errors: createOrganizationMemberErrors } =
        await client.graphql({
          query: createOrganizationMember,
          variables: {
            input: {
              owner: identity.sub, // TODO: :: username
              organizationID: organization.id,
            },
          },
        })
      const organizationMember = data.createOrganizationMember
      if (organizationMember) {
        return organization
      } else {
        console.error(
          'createOrganizationMemberErrors',
          createOrganizationMemberErrors
        )
        throw new Error('Failed to create organization member.')
      }
    } else {
      console.error('createOrganizationErrors', createOrganizationErrors)
      throw new Error('Failed to create organization.')
    }
  } else {
    throw new Error('Not allowed.')
  }
}

async function isMemberOfAnOrganization(identity: {
  sub: string
}): Promise<boolean> {
  console.log('identity', identity)
  const { data } = await client.graphql({
    query: listOrganizationMemberByOwner,
    variables: {
      owner: identity.sub, // + '::' + identity.username, // TODO?
    },
  })
  return data.listOrganizationMemberByOwner.items.length >= 1
}
