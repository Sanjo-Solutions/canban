/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const applyForMembership = /* GraphQL */ `mutation ApplyForMembership(
  $birthDate: AWSDate!
  $notMemberOfOtherCultivationAssociation: Boolean!
  $organizationID: ID!
  $usuallyInGermany: Boolean!
) {
  applyForMembership(
    birthDate: $birthDate
    notMemberOfOtherCultivationAssociation: $notMemberOfOtherCultivationAssociation
    organizationID: $organizationID
    usuallyInGermany: $usuallyInGermany
  )
}
` as GeneratedMutation<
  APITypes.ApplyForMembershipMutationVariables,
  APITypes.ApplyForMembershipMutation
>;
export const createMembershipApplication = /* GraphQL */ `mutation CreateMembershipApplication(
  $condition: ModelMembershipApplicationConditionInput
  $input: CreateMembershipApplicationInput!
) {
  createMembershipApplication(condition: $condition, input: $input) {
    birthDate
    createdAt
    id
    notMemberOfOtherCultivationAssociation
    organizationID
    updatedAt
    usuallyInGermany
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMembershipApplicationMutationVariables,
  APITypes.CreateMembershipApplicationMutation
>;
export const createOrganization = /* GraphQL */ `mutation CreateOrganization(
  $condition: ModelOrganizationConditionInput
  $input: CreateOrganizationInput!
) {
  createOrganization(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateOrganizationMutationVariables,
  APITypes.CreateOrganizationMutation
>;
export const createOrganization2 = /* GraphQL */ `mutation CreateOrganization2 {
  createOrganization2 {
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
` as GeneratedMutation<
  APITypes.CreateOrganization2MutationVariables,
  APITypes.CreateOrganization2Mutation
>;
export const createOrganizationMember = /* GraphQL */ `mutation CreateOrganizationMember(
  $condition: ModelOrganizationMemberConditionInput
  $input: CreateOrganizationMemberInput!
) {
  createOrganizationMember(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateOrganizationMemberMutationVariables,
  APITypes.CreateOrganizationMemberMutation
>;
export const deleteMembershipApplication = /* GraphQL */ `mutation DeleteMembershipApplication(
  $condition: ModelMembershipApplicationConditionInput
  $input: DeleteMembershipApplicationInput!
) {
  deleteMembershipApplication(condition: $condition, input: $input) {
    birthDate
    createdAt
    id
    notMemberOfOtherCultivationAssociation
    organizationID
    updatedAt
    usuallyInGermany
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMembershipApplicationMutationVariables,
  APITypes.DeleteMembershipApplicationMutation
>;
export const deleteOrganization = /* GraphQL */ `mutation DeleteOrganization(
  $condition: ModelOrganizationConditionInput
  $input: DeleteOrganizationInput!
) {
  deleteOrganization(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteOrganizationMutationVariables,
  APITypes.DeleteOrganizationMutation
>;
export const deleteOrganizationMember = /* GraphQL */ `mutation DeleteOrganizationMember(
  $condition: ModelOrganizationMemberConditionInput
  $input: DeleteOrganizationMemberInput!
) {
  deleteOrganizationMember(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteOrganizationMemberMutationVariables,
  APITypes.DeleteOrganizationMemberMutation
>;
export const updateMembershipApplication = /* GraphQL */ `mutation UpdateMembershipApplication(
  $condition: ModelMembershipApplicationConditionInput
  $input: UpdateMembershipApplicationInput!
) {
  updateMembershipApplication(condition: $condition, input: $input) {
    birthDate
    createdAt
    id
    notMemberOfOtherCultivationAssociation
    organizationID
    updatedAt
    usuallyInGermany
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMembershipApplicationMutationVariables,
  APITypes.UpdateMembershipApplicationMutation
>;
export const updateOrganization = /* GraphQL */ `mutation UpdateOrganization(
  $condition: ModelOrganizationConditionInput
  $input: UpdateOrganizationInput!
) {
  updateOrganization(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateOrganizationMutationVariables,
  APITypes.UpdateOrganizationMutation
>;
export const updateOrganizationMember = /* GraphQL */ `mutation UpdateOrganizationMember(
  $condition: ModelOrganizationMemberConditionInput
  $input: UpdateOrganizationMemberInput!
) {
  updateOrganizationMember(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateOrganizationMemberMutationVariables,
  APITypes.UpdateOrganizationMemberMutation
>;
