import { z } from "zod";

const messageSchema = z.object({
  email: z
    .string({ required_error: "Email Required" })
    .trim()
    .email({ message: "Invalid email format" })
    .min(5, { message: "email Required at least 5 characters" })
    .max(255, { message: "Max 255 characters allowed" }),

  subject: z
    .string({ required_error: "subject Required" })
    .trim()
    .min(5, { message: "subject Required at least 5 characters" })
    .max(255, { message: "Max 255 characters allowed" }),

  message: z
    .string({ required_error: "subject Required" })
    .trim()
    .min(10, { message: "message Required at least 3 characters" })
    .max(255, { message: "Max 255 characters allowed" }),
});

export { messageSchema };
