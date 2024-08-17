/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createOrganization = /* GraphQL */ `mutation CreateOrganization(
  $condition: ModelOrganizationConditionInput
  $input: CreateOrganizationInput!
) {
  createOrganization(condition: $condition, input: $input) {
    createdAt
    id
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
  createOrganization2
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
export const deleteOrganization = /* GraphQL */ `mutation DeleteOrganization(
  $condition: ModelOrganizationConditionInput
  $input: DeleteOrganizationInput!
) {
  deleteOrganization(condition: $condition, input: $input) {
    createdAt
    id
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
export const updateOrganization = /* GraphQL */ `mutation UpdateOrganization(
  $condition: ModelOrganizationConditionInput
  $input: UpdateOrganizationInput!
) {
  updateOrganization(condition: $condition, input: $input) {
    createdAt
    id
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
