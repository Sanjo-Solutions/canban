'use client'

import { useCallback, useState } from 'react'
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '@/amplify/data/resource'
import { Authenticator } from '@aws-amplify/ui-react'
import type { AuthUser } from 'aws-amplify/auth'
import { useOrganization } from './useOrganization'

const client = generateClient<Schema>()

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => <Inner user={user} />}
    </Authenticator>
  )
}

function Inner({ user }: { user: AuthUser | undefined }) {
  const [organization, hasLoadedOrganization] = useOrganization(user)
  const [hasCreatedOrganization, setHasCreatedOrganization] =
    useState<boolean>(false)

  const createOrganization = useCallback(async function createOrganization() {
    const { data: organization, errors } =
      await client.mutations.createOrganization2({})
    if (organization) {
      setHasCreatedOrganization(true)
    }
  }, [])

  return (
    <>
      {hasLoadedOrganization && !organization && !hasCreatedOrganization && (
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
