'use server'

import { db } from "@/db";
import { users } from "@/mannequin-data";
import { usersTable } from "@/schema";


export async function seedAllData() {
  // users
  try {
    const r1 = await Promise.all(users.map((user) => db.insert(usersTable).values(user)))
    console.log('Success! Users were settled')
  } catch (error) {
    console.log('Error. Failed to settle users')
    throw error
  }

  console.log('Data settled')
}
