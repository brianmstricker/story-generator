import { z } from "zod";

export const promptSchema = z.object({
 body: z
  .string()
  .min(10, "Prompt must be at least 10 characters")
  .max(1500, "Prompt cannot exceed 1500 characters")
  .refine((value) => {
   return value.trim().length > 0;
  }, "Prompt cannot be empty"),
});
