import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../resource'
import { Amplify } from 'aws-amplify'
import { env } from '$amplify/env/create-organization2'
import { getOrganization } from './graphql/queries'
import { createMembershipApplication } from './graphql/mutations'

// TODO: Feature: Application only via private link
// TODO: Rate throttling (Seems to be implementable with AWS WAF when it is supported for AWS Amplify.)

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

export const handler: Schema['applyForMembership']['functionHandler'] =
  async event => {
    const { data, errors: getOrganizationErrors } = await client.graphql({
      query: getOrganization,
      variables: {
        id: event.arguments.organizationID,
      },
    })

    const organization = data?.getOrganization

    if (organization) {
      if (organization.areApplicationsEnabled) {
        // TODO: Check first if there is already an application of the same person for the same organization.
        // TODO: Info to people who try to apply, that they can only be member in one organization (for weed).
        const { data, errors: createMembershipApplicationErrors } =
          await client.graphql({
            query: createMembershipApplication,
            variables: {
              input: {
                organizationID: event.arguments.organizationID,
                notMemberOfOtherCultivationAssociation:
                  event.arguments.notMemberOfOtherCultivationAssociation,
                usuallyInGermany: event.arguments.usuallyInGermany,
                birthDate: event.arguments.birthDate,
              },
            },
          })
        const membershipApplication = data.createMembershipApplication

        if (!membershipApplication || createMembershipApplicationErrors) {
          console.error(
            'createMembershipApplicationErrors',
            createMembershipApplicationErrors
          )
          throw new Error('Error creating the membership application.')
        }

        return true
      } else {
        throw new Error('Applications are disabled for the organization.')
      }
    } else {
      console.error('getOrganizationErrors', getOrganizationErrors)
      throw new Error('Organization not found.')
    }
  }
