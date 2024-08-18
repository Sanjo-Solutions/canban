'use client'

import { useEffect, useState } from 'react'
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '@/amplify/data/resource'
import type { AuthUser } from 'aws-amplify/auth'

const client = generateClient<Schema>()

type Organization = Schema['Organization']['type']

export function useOrganization(
  user: AuthUser | undefined
): [Organization | null, boolean] {
  const [hasLoadedOrganization, setHasLoadedOrganization] =
    useState<boolean>(false)
  const [organization, setOrganization] = useState<Organization | null>(null)

  useEffect(
    function () {
      async function f() {
        setHasLoadedOrganization(false)

        let result = null
        try {
          result = await client.queries.retrieveOrganization()
        } catch (error: any) {
          // This is here until https://github.com/aws-amplify/amplify-category-api/issues/2785 is fixed.
        }
        let organization = null
        if (result) {
          organization = result.data
        }
        if (organization) {
          setHasLoadedOrganization(true)
          setOrganization(organization)
          return
        }

        setHasLoadedOrganization(true)
        setOrganization(null)
      }

      f()
    },
    [user]
  )

  return [organization, hasLoadedOrganization]
}
