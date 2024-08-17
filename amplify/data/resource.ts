import { type ClientSchema, a, defineData } from '@aws-amplify/backend'
import { createOrganization2 } from './create-organization2/resource.js'

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a
  .schema({
    Organization: a
      .model({
        owner: a.string().required(),
        name: a.string(),
        members: a.hasMany('OrganizationMember', 'organizationID'),
      })
      .authorization(allow => [allow.owner().to(['read'])]),
    OrganizationMember: a
      .model({
        // TODO
        owner: a.string().required(),
        organizationID: a.id(),
        organization: a.belongsTo('Organization', 'organizationID'),
      })
      .secondaryIndexes(index => [index('owner')])
      .authorization(allow => [allow.owner().to(['read'])]),
    createOrganization2: a
      .mutation()
      .arguments({})
      .returns(a.ref('Organization'))
      .authorization(allow => [allow.authenticated()])
      .handler(a.handler.function(createOrganization2)),
  })
  .authorization(allow => [allow.resource(createOrganization2)])

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
})

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
