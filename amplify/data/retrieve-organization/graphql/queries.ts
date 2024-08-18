/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMembershipApplication = /* GraphQL */ `query GetMembershipApplication($id: ID!) {
  getMembershipApplication(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMembershipApplicationQueryVariables,
  APITypes.GetMembershipApplicationQuery
>;
export const getOrganization = /* GraphQL */ `query GetOrganization($id: ID!) {
  getOrganization(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetOrganizationQueryVariables,
  APITypes.GetOrganizationQuery
>;
export const getOrganizationMember = /* GraphQL */ `query GetOrganizationMember($id: ID!) {
  getOrganizationMember(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetOrganizationMemberQueryVariables,
  APITypes.GetOrganizationMemberQuery
>;
export const listMembershipApplications = /* GraphQL */ `query ListMembershipApplications(
  $filter: ModelMembershipApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembershipApplications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      birthDate
      createdAt
      id
      notMemberOfOtherCultivationAssociation
      organizationID
      updatedAt
      usuallyInGermany
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMembershipApplicationsQueryVariables,
  APITypes.ListMembershipApplicationsQuery
>;
export const listOrganizationMemberByOwner = /* GraphQL */ `query ListOrganizationMemberByOwner(
  $filter: ModelOrganizationMemberFilterInput
  $limit: Int
  $nextToken: String
  $owner: String!
  $sortDirection: ModelSortDirection
) {
  listOrganizationMemberByOwner(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    owner: $owner
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      organizationID
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrganizationMemberByOwnerQueryVariables,
  APITypes.ListOrganizationMemberByOwnerQuery
>;
export const listOrganizationMembers = /* GraphQL */ `query ListOrganizationMembers(
  $filter: ModelOrganizationMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrganizationMembers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      id
      organizationID
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrganizationMembersQueryVariables,
  APITypes.ListOrganizationMembersQuery
>;
export const listOrganizations = /* GraphQL */ `query ListOrganizations(
  $filter: ModelOrganizationFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOrganizations(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      areApplicationsEnabled
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrganizationsQueryVariables,
  APITypes.ListOrganizationsQuery
>;
