import { describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Page from './page'
import { setOrganizationToANMembersOrganization } from '@/testing/setOrganizationToANMembersOrganization'
import '@/app/custom.scss'

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

describe('Page', () => {
  test('Shows error that only persons with a minimum age of 18 can become a member when age is below 18', async () => {
    setOrganizationToAOneMemberOrganization()
    render(<Page />)
    const birthDate = new Date(`${new Date().getFullYear() - 17}-01-01`) // 17 years old
    const input = screen.getByTestId<HTMLInputElement>('birth-date')
    await setDate(input, birthDate)
    expect(screen.getByTestId('minimum-age-18-error')).toBeDefined()
  })

  test('Birth date is marked as invalid when age is below 18', async () => {
    setOrganizationToAOneMemberOrganization()
    render(<Page />)
    const birthDate = new Date(`${new Date().getFullYear() - 17}-01-01`) // 18 years old
    const input = screen.getByTestId<HTMLInputElement>('birth-date')
    await setDate(input, birthDate)
    expect(input.classList.contains('is-invalid')).toEqual(true)
  })

  test('Error that only persons with a minimum age of 18 can become a member is absent when age is 18 or higher', async () => {
    setOrganizationToAOneMemberOrganization()
    render(<Page />)
    const birthDate = new Date(`${new Date().getFullYear() - 18}-01-01`) // 18 years old
    console.log(birthDate)
    const input = screen.getByTestId<HTMLInputElement>('birth-date')
    await setDate(input, birthDate)
    expect(screen.getByTestId('minimum-age-18-error')).not.toBeVisible()
  })

  test('Birth date is marked as valid when age is 18 or higher', async () => {
    setOrganizationToAOneMemberOrganization()
    render(<Page />)
    const birthDate = new Date(`${new Date().getFullYear() - 18}-01-01`) // 18 years old
    const input = screen.getByTestId<HTMLInputElement>('birth-date')
    await setDate(input, birthDate)
    expect(input.classList.contains('is-valid')).toEqual(true)
  })
})

function formatDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(date.getDate()).padStart(2, '0')}`
}

function setOrganizationToAOneMemberOrganization(): void {
  setOrganizationToANMembersOrganization(1)
}

async function setDate(input: HTMLInputElement, date: Date): Promise<void> {
  await fireEvent.change(input, {
    target: {
      value: formatDate(date),
    },
  })
}
