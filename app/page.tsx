'use client'

import { useCallback, useEffect, useState } from 'react'
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '@/amplify/data/resource'
import { Authenticator } from '@aws-amplify/ui-react'
import type { AuthUser } from 'aws-amplify/auth'

const client = generateClient<Schema>()

type Organization = Schema['Organization']['type']

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => <Inner user={user} />}
    </Authenticator>
  )
}

function Inner({ user }: { user: AuthUser | undefined }) {
  const [hasLoadedOrganization, setHasLoadedOrganization] =
    useState<boolean>(false)
  const [organization, setOrganization] = useState<Organization | null>(null)

  useEffect(
    function () {
      async function f() {
        setHasLoadedOrganization(false)

        if (user) {
          const { data: organizationMembers } =
            await client.models.OrganizationMember.listOrganizationMemberByOwner(
              {
                owner: user.userId,
              }
            )
          if (organizationMembers.length >= 1) {
            const organizationMember = organizationMembers[0]
            if (organizationMember.organizationID) {
              const { data: organization } =
                await client.models.Organization.get({
                  id: organizationMember.organizationID,
                })
              if (organization) {
                setHasLoadedOrganization(true)
                setOrganization(organization)
                return
              }
            }
          }
        }

        setHasLoadedOrganization(true)
        setOrganization(null)
      }

      f()
    },
    [user]
  )

  const createOrganization = useCallback(async function createOrganization() {
    const { data: organization, errors } =
      await client.mutations.createOrganization2({})
    if (organization) {
      setOrganization(organization)
    }
  }, [])

  return (
    <>
      {hasLoadedOrganization && !organization && (
        <button
          className='btn btn-primary'
          type='button'
          onClick={createOrganization}
        >
          Organisation erstellen
        </button>
      )}
    </>
  )
}
