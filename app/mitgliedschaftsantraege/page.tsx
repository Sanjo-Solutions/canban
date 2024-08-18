'use client'

import type { Schema } from '@/amplify/data/resource'
import { generateClient } from 'aws-amplify/api'
import { useEffect, useState } from 'react'

const client = generateClient<Schema>()

type MembershipApplication = Schema['MembershipApplication']['type']

export default function () {
  const [membershipApplications, setMembershipApplications] = useState<
    MembershipApplication[]
  >([])

  useEffect(function () {
    async function f() {
      const { data: membershipApplications, errors } =
        await client.queries.retrieveMembershipApplications()
      if (membershipApplications) {
        setMembershipApplications(membershipApplications)
      }
      if (errors) {
        console.error(errors)
      }
    }

    f()
  }, [])

  return <pre>{JSON.stringify(membershipApplications, null, 2)}</pre>
}
