import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../resource'
import { Amplify } from 'aws-amplify'
import { env } from '$amplify/env/retrieve-organization-name'
import { getOrganization } from './graphql/queries'

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

export const handler: Schema['retrieveOrganizationName']['functionHandler'] =
  async event => {
    try {
      const { data, errors } = await client.graphql({
        query: getOrganization,
        variables: {
          id: event.arguments.id,
        },
      })

      if (data?.getOrganization?.name && !errors) {
        return data.getOrganization.name
      } else {
        console.error('errors', errors)
        throw new Error('Error')
      }
    } catch (error: any) {
      console.error(error)
      return null
    }
  }
