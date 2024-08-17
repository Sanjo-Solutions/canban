'use client'

import { useEffect, useState } from 'react'
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '@/amplify/data/resource'
import type { AuthUser } from 'aws-amplify/auth'

const client = generateClient<Schema>()

type OrganizationMember = Schema['OrganizationMember']['type']

export function useOrganizationMember(
  user: AuthUser | undefined
): [OrganizationMember | null, boolean] {
  const [hasLoadedOrganizationMember, setHasLoadedOrganizationMember] =
    useState<boolean>(false)
  const [organizationMember, setOrganizationMember] =
    useState<OrganizationMember | null>(null)

  useEffect(
    function () {
      async function f() {
        setHasLoadedOrganizationMember(false)

        if (user) {
          const { data: organizationMembers } =
            await client.models.OrganizationMember.listOrganizationMemberByOwner(
              {
                owner: user.userId,
              }
            )
          if (organizationMembers.length >= 1) {
            const organizationMember = organizationMembers[0]
            setHasLoadedOrganizationMember(true)
            setOrganizationMember(organizationMember)
            return
          }
        }

        setHasLoadedOrganizationMember(true)
        setOrganizationMember(null)
      }

      f()
    },
    [user]
  )

  return [organizationMember, hasLoadedOrganizationMember]
}
