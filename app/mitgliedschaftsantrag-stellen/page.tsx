'use client'

import type { Schema } from '@/amplify/data/resource'
import { useSearchParams } from 'next/navigation'
import { Form } from './form'
import { generateClient } from 'aws-amplify/api'
import { useEffect, useState } from 'react'

const client = generateClient<Schema>()

export default function () {
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const organizationID = searchParams.get('organizationID')
  const [organization, setOrganization] = useState<{
    name?: string | null
  } | null>(null)

  useEffect(
    function () {
      async function f() {
        if (organizationID) {
          setIsLoading(true)
          const { data: organization, errors } =
            await client.queries.retrieveOrganizationName(
              {
                id: organizationID,
              },
              {
                authMode: 'iam',
              }
            )
          setIsLoading(false)

          if (!errors) {
            setOrganization(organization)
          }
        }
      }

      f()
    },
    [organizationID]
  )

  return isLoading ? (
    <div>Lädt...</div>
  ) : organization ? (
    <>
      <h2>
        Mitgliedschaftsantrag
        {organization.name ? ` für ${organization.name}` : ''}
      </h2>

      <Form />
    </>
  ) : (
    <div>Ungültige URL.</div>
  )
}
