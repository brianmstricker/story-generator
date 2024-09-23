"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { promptSchema } from "@/schemas/promptSchema";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const TextFieldForm = () => {
 const [submitting, setSubmitting] = useState(false);
 const form = useForm<z.infer<typeof promptSchema>>({
  resolver: zodResolver(promptSchema),
  defaultValues: {
   prompt: "",
  },
 });
 function onSubmit(values: z.infer<typeof promptSchema>) {
  console.log(values);
 }
 const buttonDisabled = submitting;
 return (
  <Form {...form}>
   <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
     control={form.control}
     name="prompt"
     render={({ field }) => (
      <FormItem>
       <FormLabel className="text-lg">What story do you have in mind?</FormLabel>
       <FormControl>
        <Textarea {...field} placeholder="Write your prompt here..." className="w-full border rounded-md p-3 h-[30vh]" />
       </FormControl>
       <FormMessage />
      </FormItem>
     )}
    />
    <Button className="mt-5 w-fit mx-auto block" disabled={buttonDisabled}>
     Generate
    </Button>
   </form>
  </Form>
 );
};
export default TextFieldForm;
