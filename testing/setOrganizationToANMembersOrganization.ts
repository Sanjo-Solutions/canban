import { useOrganization } from '@/app/useOrganization'
import { vi } from 'vitest'

export function setOrganizationToANMembersOrganization(
  numberOfMembers: number
): void {
  const members = new Array(numberOfMembers)
  for (let index = 0; index < numberOfMembers; index++) {
    members[index] = {}
  }
  vi.mocked(useOrganization).mockReturnValue([
    {
      members,
    } as any,
    true,
  ])
}
