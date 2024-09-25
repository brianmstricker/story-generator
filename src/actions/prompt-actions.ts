"use server";
import prisma from "@/lib/db";
// import OpenAI from "openai";

// const client = new OpenAI({
//  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
// });

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
  // const chatCompletion = await client.chat.completions.create({
  //  messages: [{ role: "user", content: "Say this is a test" }],
  //  model: "gpt-3.5-turbo",
  // });
 } catch (error) {
  console.error(error);
  return error;
 }
}
