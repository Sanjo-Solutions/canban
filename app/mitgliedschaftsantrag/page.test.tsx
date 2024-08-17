import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Inner } from './page'
import { useOrganization } from '../useOrganization.js'
import { maximumAllowedMembers } from '../maximumAllowedMembers'

const mocks = vi.hoisted(() => {
  return {
    useOrganization: vi.fn(),
  }
})

vi.mock(import('../useOrganization.js'), async importOriginal => {
  const mod = await importOriginal()
  return {
    ...mod,
    useOrganization: mocks.useOrganization,
  }
})

describe('Inner', () => {
  test('Maximum number of members alert present when maximum allowed number of members has been reached', () => {
    const members = new Array(maximumAllowedMembers)
    for (let index = 0; index < maximumAllowedMembers; index++) {
      members[index] = {}
    }
    vi.mocked(useOrganization).mockReturnValue([
      {
        members,
      } as any,
      true,
    ])

    render(<Inner user={{ userId: '1', username: '' }} />)
    expect(screen.getByTestId('maximum-number-of-members-alert')).toBeDefined()
  })

  test('Maximum number of members alert absent when member count is below maximum number of allowed members', () => {
    const lessThanMaximumNumberOfAllowedMembers = maximumAllowedMembers - 1
    const members = new Array(lessThanMaximumNumberOfAllowedMembers)
    for (
      let index = 0;
      index < lessThanMaximumNumberOfAllowedMembers;
      index++
    ) {
      members[index] = {}
    }
    vi.mocked(useOrganization).mockReturnValue([
      {
        members,
      } as any,
      true,
    ])

    render(<Inner user={{ userId: '1', username: '' }} />)
    expect(screen.queryByTestId('maximum-number-of-members-alert')).toBeNull()
  })
})
