"use server";
import prisma from "@/lib/db";

export async function getPrompts() {
 try {
  const prompts = await prisma.prompt.findMany();
  return prompts;
 } catch (error) {
  console.error(error);
  return error;
 }
}

// export async function createPrompt(data) {
//  return prisma.prompt.create({
//   data,
//  });
// }
