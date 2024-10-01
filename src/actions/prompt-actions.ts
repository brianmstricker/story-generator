"use server";
import prisma from "@/lib/db";
import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) throw new Error("Missing OPENAI_API_KEY");

const client = new OpenAI({
 apiKey: process.env.OPENAI_API_KEY,
});

export async function getPrompts() {
 try {
  const prompts = await prisma.prompt.findMany();
  return prompts;
 } catch (error) {
  console.error(error);
  return error;
 }
}

export async function createPrompt() {
 try {
  const chatCompletion = await client.chat.completions.create({
   messages: [{ role: "user", content: "Say this is a test" }],
   model: "gpt-3.5-turbo",
  });
  console.log(chatCompletion);
  return { message: "Prompt created" };
 } catch (error) {
  console.error(error);
  return error;
 }
}
