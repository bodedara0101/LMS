import { z } from "zod";

const registerSchema = z.object({
  name: z
    .string({ required_error: "Name Required" })
    .trim()
    .min(3, { message: "name Required at least 3 characters" })
    .max(255, { message: "Max 255 characters allowed" }),

  email: z
    .string({ required_error: "Email Required" })
    .trim()
    .email({ message: "Invalid email format" })
    .min(5, { message: "email Required at least 5 characters" })
    .max(255, { message: "Max 255 characters allowed" }),

  password: z
    .string({ required_error: "Password Required" })
    .trim()
    .min(8, { message: "password Required at least 8 characters" })
    .max(255, { message: "Max 255 characters allowed" }),
  isAdmin: z.boolean().optional().default(false), // Set default value
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email Required" })
    .trim()
    .email({ message: "Invalid email format" })
    .min(5, { message: "Required at least 5 characters" })
    .max(255, { message: "Max 255 characters allowed" }),

  password: z
    .string({ required_error: "Password Required" })
    .trim()
    .min(8, { message: "Password Contain at least 8 characters" })
    .max(255, { message: "Max 255 characters allowed" }),
});

export { registerSchema, loginSchema };
