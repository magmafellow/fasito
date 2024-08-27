'use server'

import { db } from "@/db";
import { usersTable } from "@/example-schema";

async function clearUsersTable() {
  try {
    await db.delete(usersTable)
    console.log('Success! Completed clearUsersTable()')
  } catch (error) {
    console.log('Error. Failed to clearUsersTable()')
  }
}

export default async function clearAllTables() {
  try {
    const r1 = await clearUsersTable()
  } catch (error) {
    console.log('Error. Something went wrong clearAllTables()')
  }

  console.log('Success! clearAllTables')
}
