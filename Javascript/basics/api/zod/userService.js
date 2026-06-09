import * as z from "zod";
import { apiClient } from "./apiconfig.js";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

const userArraySchema = z.array(userSchema);

export async function getValidatedUsers() {
  const rawData = await apiClient("/users");
  const parsedData = await userArraySchema.parse(rawData);
  return parsedData;
}
