'use client'

import { useEffect, useState } from 'react'
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '@/amplify/data/resource'
import type { AuthUser } from 'aws-amplify/auth'
import { useOrganizationMember } from './useOrganizationMember'

const client = generateClient<Schema>()

type Organization = Schema['Organization']['type']

export function useOrganization(
  user: AuthUser | undefined
): [Organization | null, boolean] {
  const [hasLoadedOrganization, setHasLoadedOrganization] =
    useState<boolean>(false)
  const [organization, setOrganization] = useState<Organization | null>(null)
  const [organizationMember] = useOrganizationMember(user)

  useEffect(
    function () {
      async function f() {
        setHasLoadedOrganization(false)

        if (organizationMember) {
          if (organizationMember.organizationID) {
            const { data: organization } = await client.models.Organization.get(
              {
                id: organizationMember.organizationID,
              }
            )
            if (organization) {
              setHasLoadedOrganization(true)
              setOrganization(organization)
              return
            }
          }
        }

        setHasLoadedOrganization(true)
        setOrganization(null)
      }

      f()
    },
    [organizationMember]
  )

  return [organization, hasLoadedOrganization]
}
