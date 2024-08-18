import type { Schema } from '@/amplify/data/resource'
import { useSearchParams } from 'next/navigation'
import { Form } from './form'
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/data'
import outputs from '@/amplify_outputs.json'
import { cookies } from 'next/headers'

const client = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
})

export default async function ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  if (searchParams) {
    let organizationID = searchParams.organizationID
    if (organizationID) {
      if (Array.isArray(organizationID)) {
        organizationID = organizationID[organizationID.length - 1]
      }
      const { data: organizationName, errors } =
        await client.queries.retrieveOrganizationName({
          id: organizationID,
        })

      if (!errors && organizationName) {
        return (
          <>
            <h2>Mitgliedschaftsantrag für {organizationName}</h2>

            <Form />
          </>
        )
      }
    }
  }

  return <div>Ungültige URL.</div>
}
