'use client'

import { Authenticator } from '@aws-amplify/ui-react'
import { useOrganization } from '../useOrganization'
import type { AuthUser } from 'aws-amplify/auth'
import { useEffect, useState } from 'react'
import { maximumAllowedMembers } from '../maximumAllowedMembers'

export default function () {
  return (
    <Authenticator>
      {({ signOut, user }) => <Inner user={user} />}
    </Authenticator>
  )
}

export function Inner({ user }: { user: AuthUser | undefined }) {
  const [organization] = useOrganization(user)
  const [membersCount, setMembersCount] = useState<number | null>(null)

  useEffect(
    function () {
      async function f() {
        if (organization) {
          setMembersCount(organization.members.length)
        } else {
          setMembersCount(null)
        }
      }

      f()
    },
    [organization]
  )

  console.log(
    'membersCount',
    membersCount,
    membersCount !== null && membersCount >= maximumAllowedMembers
  )

  return (
    <>
      {membersCount !== null && membersCount >= maximumAllowedMembers && (
        <div
          data-testid='maximum-number-of-members-alert'
          className='alert alert-info'
          role='alert'
        >
          Die Organisation hat die maximal erlaubte Mitgliederzahl (
          {maximumAllowedMembers}) erreicht.
        </div>
      )}
    </>
  )
}
