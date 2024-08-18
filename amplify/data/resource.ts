import { type ClientSchema, a, defineData } from '@aws-amplify/backend'
import { createOrganization2 } from './create-organization2/resource.js'
import { applyForMembership } from './apply-for-membership/resource.js'
import { retrieveOrganizationName } from './retrieve-organization-name/resource.js'
import { retrieveMembershipApplications } from './retrieve-membership-applications/resource.js'

const schema = a
  .schema({
    Organization: a
      .model({
        id: a.id().required(),
        owner: a.string().required(),
        // TODO: Can we prevent that all organization names can be read by anyone?
        name: a.string(),
        members: a.hasMany('OrganizationMember', 'organizationID'),
        areApplicationsEnabled: a.boolean().default(false),
      })
      .authorization(allow => [allow.owner().to([])]),
    OrganizationMember: a
      .model({
        // TODO
        owner: a.string().required(),
        organizationID: a.id(),
        organization: a.belongsTo('Organization', 'organizationID'),
      })
      .secondaryIndexes(index => [index('owner')])
      .authorization(allow => [allow.owner().to([])]),
    MembershipApplication: a
      .model({
        // TODO: Feature: Application only via private link
        organizationID: a.id().required(), // TODO: Allow create only for organization that have enabled the feature.
        notMemberOfOtherCultivationAssociation: a.boolean().required(),
        usuallyInGermany: a.boolean().required(),
        birthDate: a.date().required(),
      })
      .secondaryIndexes(index => [index('organizationID')])
      .authorization(allow => [allow.owner().to([])]),
    createOrganization2: a
      .mutation()
      .arguments({})
      .returns(a.ref('Organization'))
      .handler(a.handler.function(createOrganization2))
      .authorization(allow => [allow.authenticated()]),
    applyForMembership: a
      .mutation()
      .arguments({
        organizationID: a.id().required(),
        notMemberOfOtherCultivationAssociation: a.boolean().required(),
        usuallyInGermany: a.boolean().required(),
        birthDate: a.date().required(),
      })
      .returns(a.boolean())
      .handler(a.handler.function(applyForMembership))
      .authorization(allow => [allow.guest(), allow.authenticated()]),
    retrieveOrganizationName: a
      .query()
      .arguments({ id: a.id().required() })
      .returns(a.string())
      .handler(a.handler.function(retrieveOrganizationName))
      .authorization(allow => [allow.guest(), allow.authenticated()]),
    retrieveMembershipApplications: a
      .query()
      .returns(a.ref('MembershipApplication').required().array().required())
      .handler(a.handler.function(retrieveMembershipApplications))
      .authorization(allow => [allow.group('Mitarbeiter')]),
  })
  .authorization(allow => [
    allow.resource(createOrganization2),
    allow.resource(applyForMembership),
    allow.resource(retrieveOrganizationName),
    allow.resource(retrieveMembershipApplications),
  ])

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
})
