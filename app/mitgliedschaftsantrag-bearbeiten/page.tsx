'use client'

import { useState } from 'react'

export default function () {
  const [membersCount, setMembersCount] = useState<number | null>(null)

  // {membersCount !== null &&
  //   (membersCount >= maximumAllowedMembers ? (
  //     <div
  //       data-testid='maximum-number-of-members-alert'
  //       className='alert alert-info'
  //       role='alert'
  //     >
  //       Die Organisation hat die maximal erlaubte Mitgliederzahl (
  //       {maximumAllowedMembers}) erreicht.
  //     </div>
  //   )

  return <div></div>
}
