import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
import { maximumAllowedMembers } from '../maximumAllowedMembers'
import { setOrganizationToANMembersOrganization } from '@/testing/setOrganizationToANMembersOrganization'

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

describe.skip('Page', () => {
  test('Maximum number of members alert present when maximum allowed number of members has been reached', () => {
    setOrganizationToANMembersOrganization(maximumAllowedMembers)
    render(<Page />)
    expect(screen.getByTestId('maximum-number-of-members-alert')).toBeDefined()
  })

  test('Maximum number of members alert absent when member count is below maximum number of allowed members', () => {
    setOrganizationToANMembersOrganization(maximumAllowedMembers - 1)
    render(<Page />)
    expect(screen.queryByTestId('maximum-number-of-members-alert')).toBeNull()
  })
})
