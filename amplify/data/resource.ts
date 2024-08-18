import { type ClientSchema, a, defineData } from '@aws-amplify/backend'
import { createOrganization2 } from './create-organization2/resource.js'
import { applyForMembership } from './apply-for-membership/resource.js'

const schema = a
  .schema({
    Organization: a
      .model({
        id: a
          .id()
          .required()
          .authorization(allow => [allow.owner().to(['read'])]),
        owner: a
          .string()
          .required()
          .authorization(allow => [allow.owner().to(['read'])]),
        // TODO: Can we prevent that all organization names can be read by anyone?
        name: a.string().authorization(allow => [allow.guest().to(['read'])]),
        members: a.hasMany('OrganizationMember', 'organizationID'),
        areApplicationsEnabled: a.boolean().default(false),
      })
      .authorization(allow => [allow.owner().to(['read'])]),
    OrganizationMember: a
      .model({
        // TODO
        owner: a.string().required(),
        organizationID: a.id(),
        organization: a.belongsTo('Organization', 'organizationID'),
      })
      .secondaryIndexes(index => [index('owner')])
      .authorization(allow => [allow.owner().to(['read'])]),
    MembershipApplication: a
      .model({
        // TODO: Feature: Application only via private link
        organizationID: a.id().required(), // TODO: Allow create only for organization that have enabled the feature.
        notMemberOfOtherCultivationAssociation: a.boolean().required(),
        usuallyInGermany: a.boolean().required(),
        birthDate: a.date().required(),
      })
      .authorization(allow => [allow.owner().to([])]),
    createOrganization2: a
      .mutation()
      .arguments({})
      .returns(a.ref('Organization'))
      .authorization(allow => [allow.authenticated()])
      .handler(a.handler.function(createOrganization2)),
    applyForMembership: a
      .mutation()
      .arguments({
        organizationID: a.id().required(),
        notMemberOfOtherCultivationAssociation: a.boolean().required(),
        usuallyInGermany: a.boolean().required(),
        birthDate: a.date().required(),
      })
      .returns(a.boolean())
      .authorization(allow => [allow.guest()])
      .handler(a.handler.function(applyForMembership)),
  })
  .authorization(allow => [allow.resource(createOrganization2)])

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
