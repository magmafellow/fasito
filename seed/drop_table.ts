'use server'

import { db } from "@/db";
import { sql } from "drizzle-orm";

const usersString = sql`DROP TABLE users_table`

export async function dropTables() {
  try {
    await db.execute(usersString)

    console.log('Success! dropTables()')
  } catch (error) {
    console.log('Error. Failed dropTables()')
    throw error
  }
}
