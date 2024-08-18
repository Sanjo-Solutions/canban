'use client'

import { useCallback, useEffect, useState } from 'react'
import { classNames } from '@/classNames'
import type { Schema } from '@/amplify/data/resource'
import { generateClient } from 'aws-amplify/api'
import { useSearchParams } from 'next/navigation'

const client = generateClient<Schema>()

export default function () {
  const searchParams = useSearchParams()
  const organizationID = searchParams.get('organizationID')
  const [wasAttemptedToSubmit, setWasAttemptedToSubmit] =
    useState<boolean>(false)
  const [isSending, setIsSending] = useState<boolean>(false)
  const [
    notMemberOfOtherCultivationAssociation,
    setNotMemberOfOtherCultivationAssociation,
  ] = useState<boolean>(false)
  const [usuallyInGermany, setUsuallyInGermany] = useState<boolean>(false)

  const [birthDate, setBirthDate] = useState<string>('')

  const onSubmit = useCallback(
    async function onSubmit(event) {
      event.preventDefault()

      setWasAttemptedToSubmit(true)

      if (
        notMemberOfOtherCultivationAssociation &&
        usuallyInGermany &&
        isAgeValid(calculateAge(new Date(birthDate)))
      ) {
        setIsSending(true)
        await client.mutations.applyForMembership({
          organizationID,
          notMemberOfOtherCultivationAssociation,
          usuallyInGermany,
          birthDate,
        })
        setIsSending(false)
      }
    },
    [organizationID]
  )

  return (
    <form noValidate onSubmit={onSubmit}>
      <h2>Mitgliedschaftsantrag</h2>

      <div className='form-check'>
        <input
          className={classNames(
            'form-check-input',
            wasAttemptedToSubmit &&
              (notMemberOfOtherCultivationAssociation
                ? 'is-valid'
                : 'is-invalid')
          )}
          type='checkbox'
          id='notMemberOfOtherCultivationAssociation'
          name='notMemberOfOtherCultivationAssociation'
          checked={notMemberOfOtherCultivationAssociation}
          onChange={event =>
            setNotMemberOfOtherCultivationAssociation(event.target.checked)
          }
        />
        <label
          className='form-check-label'
          htmlFor='notMemberOfOtherCultivationAssociation'
        >
          Ich bin in keiner anderen Anbauvereinigung Mitglied
        </label>
        <div className='invalid-feedback'>
          Nur Personen, die keiner anderen Anbauvereinigung Mitglied sind,
          können Mitglied werden.
        </div>
      </div>

      <div className='form-check mb-3'>
        <input
          className={classNames(
            'form-check-input',
            wasAttemptedToSubmit &&
              (usuallyInGermany ? 'is-valid' : 'is-invalid')
          )}
          type='checkbox'
          id='usuallyInGermany'
          name='usuallyInGermany'
          checked={usuallyInGermany}
          onChange={event => setUsuallyInGermany(event.target.checked)}
        />
        <label className='form-check-label' htmlFor='usuallyInGermany'>
          Ich habe einen Wohnsitz oder gewöhnlichen Aufenthalt in Deutschland
        </label>
        <div className='invalid-feedback'>
          Nur Personen, die einen Wohnsitz oder gewöhnlichen Aufenthalt in
          Deutschland haben, können Mitglied werden.
        </div>
      </div>

      <div className='mb-3'>
        <label htmlFor='birth-date' className='form-label'>
          Geburtsdatum
        </label>
        <input
          type='date'
          className={classNames(
            'form-control',
            (birthDate || wasAttemptedToSubmit) &&
              (isAgeValid(calculateAge(new Date(birthDate)))
                ? 'is-valid'
                : 'is-invalid')
          )}
          id='birth-date'
          name='birth-date'
          value={birthDate}
          onChange={event => {
            setBirthDate(event.target.value)
          }}
          data-testid='birth-date'
        />
        <div className='invalid-feedback' data-testid='minimum-age-18-error'>
          Nur Personen, die mindestens 18 Jahre alt sind, können Mitglied
          werden.
        </div>
      </div>

      <div className='text-end'>
        <button type='submit' className='btn btn-primary' disabled={isSending}>
          Antrag stellen
        </button>
      </div>
    </form>
  )
}

function isAgeValid(age: number): boolean {
  return age >= 18
}

function calculateAge(date: Date): number {
  const now = new Date()
  let age = now.getFullYear() - date.getFullYear() - 1
  if (
    now.getMonth() > date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() >= date.getDate())
  ) {
    age++
  }
  return age
}
