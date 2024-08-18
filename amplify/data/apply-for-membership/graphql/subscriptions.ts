/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMembershipApplication = /* GraphQL */ `subscription OnCreateMembershipApplication(
  $filter: ModelSubscriptionMembershipApplicationFilterInput
) {
  onCreateMembershipApplication(filter: $filter) {
    birthDate
    createdAt
    id
    notMemberOfOtherCultivationAssociation
    organizationID
    owner
    updatedAt
    usuallyInGermany
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMembershipApplicationSubscriptionVariables,
  APITypes.OnCreateMembershipApplicationSubscription
>;
export const onCreateOrganization = /* GraphQL */ `subscription OnCreateOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
  $owner: String
) {
  onCreateOrganization(filter: $filter, owner: $owner) {
    areApplicationsEnabled
    createdAt
    id
    members {
      nextToken
      __typename
    }
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrganizationSubscriptionVariables,
  APITypes.OnCreateOrganizationSubscription
>;
export const onCreateOrganizationMember = /* GraphQL */ `subscription OnCreateOrganizationMember(
  $filter: ModelSubscriptionOrganizationMemberFilterInput
  $owner: String
) {
  onCreateOrganizationMember(filter: $filter, owner: $owner) {
    createdAt
    id
    organization {
      areApplicationsEnabled
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    organizationID
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrganizationMemberSubscriptionVariables,
  APITypes.OnCreateOrganizationMemberSubscription
>;
export const onDeleteMembershipApplication = /* GraphQL */ `subscription OnDeleteMembershipApplication(
  $filter: ModelSubscriptionMembershipApplicationFilterInput
) {
  onDeleteMembershipApplication(filter: $filter) {
    birthDate
    createdAt
    id
    notMemberOfOtherCultivationAssociation
    organizationID
    owner
    updatedAt
    usuallyInGermany
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMembershipApplicationSubscriptionVariables,
  APITypes.OnDeleteMembershipApplicationSubscription
>;
export const onDeleteOrganization = /* GraphQL */ `subscription OnDeleteOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
  $owner: String
) {
  onDeleteOrganization(filter: $filter, owner: $owner) {
    areApplicationsEnabled
    createdAt
    id
    members {
      nextToken
      __typename
    }
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOrganizationSubscriptionVariables,
  APITypes.OnDeleteOrganizationSubscription
>;
export const onDeleteOrganizationMember = /* GraphQL */ `subscription OnDeleteOrganizationMember(
  $filter: ModelSubscriptionOrganizationMemberFilterInput
  $owner: String
) {
  onDeleteOrganizationMember(filter: $filter, owner: $owner) {
    createdAt
    id
    organization {
      areApplicationsEnabled
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    organizationID
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOrganizationMemberSubscriptionVariables,
  APITypes.OnDeleteOrganizationMemberSubscription
>;
export const onUpdateMembershipApplication = /* GraphQL */ `subscription OnUpdateMembershipApplication(
  $filter: ModelSubscriptionMembershipApplicationFilterInput
) {
  onUpdateMembershipApplication(filter: $filter) {
    birthDate
    createdAt
    id
    notMemberOfOtherCultivationAssociation
    organizationID
    owner
    updatedAt
    usuallyInGermany
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMembershipApplicationSubscriptionVariables,
  APITypes.OnUpdateMembershipApplicationSubscription
>;
export const onUpdateOrganization = /* GraphQL */ `subscription OnUpdateOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
  $owner: String
) {
  onUpdateOrganization(filter: $filter, owner: $owner) {
    areApplicationsEnabled
    createdAt
    id
    members {
      nextToken
      __typename
    }
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrganizationSubscriptionVariables,
  APITypes.OnUpdateOrganizationSubscription
>;
export const onUpdateOrganizationMember = /* GraphQL */ `subscription OnUpdateOrganizationMember(
  $filter: ModelSubscriptionOrganizationMemberFilterInput
  $owner: String
) {
  onUpdateOrganizationMember(filter: $filter, owner: $owner) {
    createdAt
    id
    organization {
      areApplicationsEnabled
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    organizationID
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrganizationMemberSubscriptionVariables,
  APITypes.OnUpdateOrganizationMemberSubscription
>;
