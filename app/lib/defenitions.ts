import { z } from "zod";


export const AddUserSchema = z.object(
  {
    username: z.string().min(3),
    password: z.string().min(5),
    gender: z.string().min(1).max(6)
  }
)
