'use server'

import { db } from "@/db";
import { AddUserSchema } from "../defenitions";
import { usersTable } from "@/schema";


export async function addUser(prevState: any, formData: FormData) {
  const formedData = {
    username: formData.get('username'),
    password: formData.get('password'),
    gender: formData.get('gender'),
  }
  const parsed = AddUserSchema.safeParse(formedData)
  if(parsed.success){
    try {
      const res = await db.insert(usersTable).values(parsed.data)
      return {
        message: 'success, user was created'
      }
    } catch (error) {
      console.log('Error. failed to insert user in dispatch')
      return {
        error: 'failed to add user'
      }
    }
  } else {
    return {
      error: 'Data you provided does not pass checks.'
    }
  }
}