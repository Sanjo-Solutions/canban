'use client'

import Link from 'next/link.js'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import { LogOut } from './LogOut'
import { I18n } from 'aws-amplify/utils'
import { translations } from '@aws-amplify/ui-react'

I18n.putVocabularies(translations)
I18n.setLanguage('de')

export function LayoutInner({ children }) {
  return (
    <Authenticator.Provider>
      <Navigation />

      <main className='flex-shrink-0'>
        <div className='container mt-3' style={{ paddingTop: '60px' }}>
          {children}
        </div>
      </main>

      <Footer />
    </Authenticator.Provider>
  )
}

function Navigation() {
  const { user } = useAuthenticator(({ route, signOut, user }) => [
    route,
    signOut,
    user,
  ])

  return (
    <nav className='navbar navbar-expand-md bg-body-tertiary fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' href='/'>
          Canban
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto'>
            <Link className='nav-link' href='/mitgliedschaftsantrag'>
              Mitgliedschaftsantrag
            </Link>
          </ul>

          <ul className='navbar-nav'>
            {!user && (
              <li className='nav-item'>
                <Link className='nav-link' href='/login'>
                  Log in
                </Link>
              </li>
            )}

            {user && (
              <li className='nav-item'>
                <LogOut />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className='py-3 my-4 mt-auto'>
      <div className='container d-flex flex-wrap justify-content-between align-items-center'>
        <ul className='nav col justify-content-end border-top  '>
          <li className='nav-item'>
            <Link href='/credits' className='nav-link px-2 text-body-secondary'>
              Credits
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
