/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type MembershipApplication = {
  __typename: "MembershipApplication",
  birthDate: string,
  createdAt: string,
  id: string,
  notMemberOfOtherCultivationAssociation: boolean,
  organizationID: string,
  updatedAt: string,
  usuallyInGermany: boolean,
};

export type Organization = {
  __typename: "Organization",
  areApplicationsEnabled?: boolean | null,
  createdAt: string,
  id: string,
  members?: ModelOrganizationMemberConnection | null,
  name?: string | null,
  owner: string,
  updatedAt: string,
};

export type ModelOrganizationMemberConnection = {
  __typename: "ModelOrganizationMemberConnection",
  items:  Array<OrganizationMember | null >,
  nextToken?: string | null,
};

export type OrganizationMember = {
  __typename: "OrganizationMember",
  createdAt: string,
  id: string,
  organization?: Organization | null,
  organizationID?: string | null,
  owner: string,
  updatedAt: string,
};

export type ModelMembershipApplicationFilterInput = {
  and?: Array< ModelMembershipApplicationFilterInput | null > | null,
  birthDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelMembershipApplicationFilterInput | null,
  notMemberOfOtherCultivationAssociation?: ModelBooleanInput | null,
  or?: Array< ModelMembershipApplicationFilterInput | null > | null,
  organizationID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  usuallyInGermany?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelMembershipApplicationConnection = {
  __typename: "ModelMembershipApplicationConnection",
  items:  Array<MembershipApplication | null >,
  nextToken?: string | null,
};

export type ModelOrganizationMemberFilterInput = {
  and?: Array< ModelOrganizationMemberFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelOrganizationMemberFilterInput | null,
  or?: Array< ModelOrganizationMemberFilterInput | null > | null,
  organizationID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelOrganizationFilterInput = {
  and?: Array< ModelOrganizationFilterInput | null > | null,
  areApplicationsEnabled?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelOrganizationFilterInput | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
};

export type ModelMembershipApplicationConditionInput = {
  and?: Array< ModelMembershipApplicationConditionInput | null > | null,
  birthDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelMembershipApplicationConditionInput | null,
  notMemberOfOtherCultivationAssociation?: ModelBooleanInput | null,
  or?: Array< ModelMembershipApplicationConditionInput | null > | null,
  organizationID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  usuallyInGermany?: ModelBooleanInput | null,
};

export type CreateMembershipApplicationInput = {
  birthDate: string,
  id?: string | null,
  notMemberOfOtherCultivationAssociation: boolean,
  organizationID: string,
  usuallyInGermany: boolean,
};

export type ModelOrganizationConditionInput = {
  and?: Array< ModelOrganizationConditionInput | null > | null,
  areApplicationsEnabled?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelOrganizationConditionInput | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateOrganizationInput = {
  areApplicationsEnabled?: boolean | null,
  id?: string | null,
  name?: string | null,
  owner: string,
};

export type ModelOrganizationMemberConditionInput = {
  and?: Array< ModelOrganizationMemberConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelOrganizationMemberConditionInput | null,
  or?: Array< ModelOrganizationMemberConditionInput | null > | null,
  organizationID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateOrganizationMemberInput = {
  id?: string | null,
  organizationID?: string | null,
  owner: string,
};

export type DeleteMembershipApplicationInput = {
  id: string,
};

export type DeleteOrganizationInput = {
  id: string,
};

export type DeleteOrganizationMemberInput = {
  id: string,
};

export type UpdateMembershipApplicationInput = {
  birthDate?: string | null,
  id: string,
  notMemberOfOtherCultivationAssociation?: boolean | null,
  organizationID?: string | null,
  usuallyInGermany?: boolean | null,
};

export type UpdateOrganizationInput = {
  areApplicationsEnabled?: boolean | null,
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type UpdateOrganizationMemberInput = {
  id: string,
  organizationID?: string | null,
  owner?: string | null,
};

export type ModelSubscriptionMembershipApplicationFilterInput = {
  and?: Array< ModelSubscriptionMembershipApplicationFilterInput | null > | null,
  birthDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  notMemberOfOtherCultivationAssociation?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionMembershipApplicationFilterInput | null > | null,
  organizationID?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  usuallyInGermany?: ModelSubscriptionBooleanInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionOrganizationFilterInput = {
  and?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
  areApplicationsEnabled?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
  owner?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionOrganizationMemberFilterInput = {
  and?: Array< ModelSubscriptionOrganizationMemberFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionOrganizationMemberFilterInput | null > | null,
  organizationID?: ModelSubscriptionIDInput | null,
  owner?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetMembershipApplicationQueryVariables = {
  id: string,
};

export type GetMembershipApplicationQuery = {
  getMembershipApplication?:  {
    __typename: "MembershipApplication",
    birthDate: string,
    createdAt: string,
    id: string,
    notMemberOfOtherCultivationAssociation: boolean,
    organizationID: string,
    updatedAt: string,
    usuallyInGermany: boolean,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    areApplicationsEnabled?: boolean | null,
    createdAt: string,
    id: string,
    members?:  {
      __typename: "ModelOrganizationMemberConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type GetOrganizationMemberQueryVariables = {
  id: string,
};

export type GetOrganizationMemberQuery = {
  getOrganizationMember?:  {
    __typename: "OrganizationMember",
    createdAt: string,
    id: string,
    organization?:  {
      __typename: "Organization",
      areApplicationsEnabled?: boolean | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner: string,
      updatedAt: string,
    } | null,
    organizationID?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type ListMembershipApplicationsQueryVariables = {
  filter?: ModelMembershipApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembershipApplicationsQuery = {
  listMembershipApplications?:  {
    __typename: "ModelMembershipApplicationConnection",
    items:  Array< {
      __typename: "MembershipApplication",
      birthDate: string,
      createdAt: string,
      id: string,
      notMemberOfOtherCultivationAssociation: boolean,
      organizationID: string,
      updatedAt: string,
      usuallyInGermany: boolean,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrganizationMemberByOwnerQueryVariables = {
  filter?: ModelOrganizationMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  owner: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListOrganizationMemberByOwnerQuery = {
  listOrganizationMemberByOwner?:  {
    __typename: "ModelOrganizationMemberConnection",
    items:  Array< {
      __typename: "OrganizationMember",
      createdAt: string,
      id: string,
      organizationID?: string | null,
      owner: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrganizationMembersQueryVariables = {
  filter?: ModelOrganizationMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationMembersQuery = {
  listOrganizationMembers?:  {
    __typename: "ModelOrganizationMemberConnection",
    items:  Array< {
      __typename: "OrganizationMember",
      createdAt: string,
      id: string,
      organizationID?: string | null,
      owner: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      areApplicationsEnabled?: boolean | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplyForMembershipMutationVariables = {
  birthDate: string,
  notMemberOfOtherCultivationAssociation: boolean,
  organizationID: string,
  usuallyInGermany: boolean,
};

export type ApplyForMembershipMutation = {
  applyForMembership?: boolean | null,
};

export type CreateMembershipApplicationMutationVariables = {
  condition?: ModelMembershipApplicationConditionInput | null,
  input: CreateMembershipApplicationInput,
};

export type CreateMembershipApplicationMutation = {
  createMembershipApplication?:  {
    __typename: "MembershipApplication",
    birthDate: string,
    createdAt: string,
    id: string,
    notMemberOfOtherCultivationAssociation: boolean,
    organizationID: string,
    updatedAt: string,
    usuallyInGermany: boolean,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  condition?: ModelOrganizationConditionInput | null,
  input: CreateOrganizationInput,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    areApplicationsEnabled?: boolean | null,
    createdAt: string,
    id: string,
    members?:  {
      __typename: "ModelOrganizationMemberConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type CreateOrganization2MutationVariables = {
};

export type CreateOrganization2Mutation = {
  createOrganization2?:  {
    __typename: "Organization",
    areApplicationsEnabled?: boolean | null,
    createdAt: string,
    id: string,
    members?:  {
      __typename: "ModelOrganizationMemberConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type CreateOrganizationMemberMutationVariables = {
  condition?: ModelOrganizationMemberConditionInput | null,
  input: CreateOrganizationMemberInput,
};

export type CreateOrganizationMemberMutation = {
  createOrganizationMember?:  {
    __typename: "OrganizationMember",
    createdAt: string,
    id: string,
    organization?:  {
      __typename: "Organization",
      areApplicationsEnabled?: boolean | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner: string,
      updatedAt: string,
    } | null,
    organizationID?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type DeleteMembershipApplicationMutationVariables = {
  condition?: ModelMembershipApplicationConditionInput | null,
  input: DeleteMembershipApplicationInput,
};

export type DeleteMembershipApplicationMutation = {
  deleteMembershipApplication?:  {
    __typename: "MembershipApplication",
    birthDate: string,
    createdAt: string,
    id: string,
    notMemberOfOtherCultivationAssociation: boolean,
    organizationID: string,
    updatedAt: string,
    usuallyInGermany: boolean,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  condition?: ModelOrganizationConditionInput | null,
  input: DeleteOrganizationInput,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    areApplicationsEnabled?: boolean | null,
    createdAt: string,
    id: string,
    members?:  {
      __typename: "ModelOrganizationMemberConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrganizationMemberMutationVariables = {
  condition?: ModelOrganizationMemberConditionInput | null,
  input: DeleteOrganizationMemberInput,
};

export type DeleteOrganizationMemberMutation = {
  deleteOrganizationMember?:  {
    __typename: "OrganizationMember",
    createdAt: string,
    id: string,
    organization?:  {
      __typename: "Organization",
      areApplicationsEnabled?: boolean | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner: string,
      updatedAt: string,
    } | null,
    organizationID?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type UpdateMembershipApplicationMutationVariables = {
  condition?: ModelMembershipApplicationConditionInput | null,
  input: UpdateMembershipApplicationInput,
};

export type UpdateMembershipApplicationMutation = {
  updateMembershipApplication?:  {
    __typename: "MembershipApplication",
    birthDate: string,
    createdAt: string,
    id: string,
    notMemberOfOtherCultivationAssociation: boolean,
    organizationID: string,
    updatedAt: string,
    usuallyInGermany: boolean,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  condition?: ModelOrganizationConditionInput | null,
  input: UpdateOrganizationInput,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    areApplicationsEnabled?: boolean | null,
    createdAt: string,
    id: string,
    members?:  {
      __typename: "ModelOrganizationMemberConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrganizationMemberMutationVariables = {
  condition?: ModelOrganizationMemberConditionInput | null,
  input: UpdateOrganizationMemberInput,
};

export type UpdateOrganizationMemberMutation = {
  updateOrganizationMember?:  {
    __typename: "OrganizationMember",
    createdAt: string,
    id: string,
    organization?:  {
      __typename: "Organization",
      areApplicationsEnabled?: boolean | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner: string,
      updatedAt: string,
    } | null,
    organizationID?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMembershipApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipApplicationFilterInput | null,
};

export type OnCreateMembershipApplicationSubscription = {
  onCreateMembershipApplication?:  {
    __typename: "MembershipApplication",
    birthDate: string,
    createdAt: string,
    id: string,
    notMemberOfOtherCultivationAssociation: boolean,
    organizationID: string,
    updatedAt: string,
    usuallyInGermany: boolean,
  } | null,
};

export type OnCreateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    areApplicationsEnabled?: boolean | null,
    createdAt: string,
    id: string,
    members?:  {
      __typename: "ModelOrganizationMemberConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrganizationMemberSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationMemberFilterInput | null,
};

export type OnCreateOrganizationMemberSubscription = {
  onCreateOrganizationMember?:  {
    __typename: "OrganizationMember",
    createdAt: string,
    id: string,
    organization?:  {
      __typename: "Organization",
      areApplicationsEnabled?: boolean | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner: string,
      updatedAt: string,
    } | null,
    organizationID?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMembershipApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipApplicationFilterInput | null,
};

export type OnDeleteMembershipApplicationSubscription = {
  onDeleteMembershipApplication?:  {
    __typename: "MembershipApplication",
    birthDate: string,
    createdAt: string,
    id: string,
    notMemberOfOtherCultivationAssociation: boolean,
    organizationID: string,
    updatedAt: string,
    usuallyInGermany: boolean,
  } | null,
};

export type OnDeleteOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    areApplicationsEnabled?: boolean | null,
    createdAt: string,
    id: string,
    members?:  {
      __typename: "ModelOrganizationMemberConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrganizationMemberSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationMemberFilterInput | null,
};

export type OnDeleteOrganizationMemberSubscription = {
  onDeleteOrganizationMember?:  {
    __typename: "OrganizationMember",
    createdAt: string,
    id: string,
    organization?:  {
      __typename: "Organization",
      areApplicationsEnabled?: boolean | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner: string,
      updatedAt: string,
    } | null,
    organizationID?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMembershipApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipApplicationFilterInput | null,
};

export type OnUpdateMembershipApplicationSubscription = {
  onUpdateMembershipApplication?:  {
    __typename: "MembershipApplication",
    birthDate: string,
    createdAt: string,
    id: string,
    notMemberOfOtherCultivationAssociation: boolean,
    organizationID: string,
    updatedAt: string,
    usuallyInGermany: boolean,
  } | null,
};

export type OnUpdateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    areApplicationsEnabled?: boolean | null,
    createdAt: string,
    id: string,
    members?:  {
      __typename: "ModelOrganizationMemberConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrganizationMemberSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationMemberFilterInput | null,
};

export type OnUpdateOrganizationMemberSubscription = {
  onUpdateOrganizationMember?:  {
    __typename: "OrganizationMember",
    createdAt: string,
    id: string,
    organization?:  {
      __typename: "Organization",
      areApplicationsEnabled?: boolean | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner: string,
      updatedAt: string,
    } | null,
    organizationID?: string | null,
    owner: string,
    updatedAt: string,
  } | null,
};
