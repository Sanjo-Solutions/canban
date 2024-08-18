import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../resource'
import { Amplify } from 'aws-amplify'
import { env } from '$amplify/env/retrieve-organization-member'
import {
  getOrganization,
  listOrganizationMemberByOwner,
} from './graphql/queries'
import { generateIdentifier } from '../../../generateIdentifier'

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

export const handler: Schema['retrieveOrganization']['functionHandler'] =
  async event => {
    try {
      const { data, errors } = await client.graphql({
        query: listOrganizationMemberByOwner,
        variables: {
          owner: generateIdentifier(
            event.identity as { sub: string; username: string }
          ),
        },
      })
      if (errors && errors.length >= 1) {
        console.error(errors)
        return null
      } else {
        const organizationMember = data.listOrganizationMemberByOwner.items[0]

        if (organizationMember) {
          const organizationID = organizationMember.organizationID
          if (organizationID) {
            const { data, errors } = await client.graphql({
              query: getOrganization,
              variables: {
                id: organizationID,
              },
            })

            const organization = data.getOrganization

            if ((errors && errors.length >= 1) || !organization) {
              console.error(errors)
              return null
            } else {
              return organization
            }
          }
        }
      }
    } catch (error: any) {
      console.error(error)
      return null
    }

    return null
  }
