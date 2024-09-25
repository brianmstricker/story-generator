"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { promptSchema } from "@/schemas/promptSchema";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SiSparkpost } from "react-icons/si";
import { FaFire, FaGripfire } from "react-icons/fa";
import { GiDiceFire } from "react-icons/gi";

const TextFieldForm = () => {
 const [submitting, setSubmitting] = useState(false);
 const form = useForm<z.infer<typeof promptSchema>>({
  resolver: zodResolver(promptSchema),
  defaultValues: {
   body: "",
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
     name="body"
     render={({ field }) => (
      <FormItem className="space-y-2">
       <FormLabel className="text-2xl">What story do you have in mind?</FormLabel>
       <FormControl>
        <Textarea {...field} placeholder="Write your prompt here..." className="w-full border rounded-md p-3 h-[30vh] text-base" />
       </FormControl>
       <FormDescription className="text-[13px]">Example: firefighter fights fire monsters</FormDescription>
       <FormMessage />
      </FormItem>
     )}
    />
    <Button
     className="mt-6 w-fit mx-auto flex gap-1 items-center text-lg text-white bg-blue-700 hover:bg-blue-700/80"
     disabled={buttonDisabled}
    >
     <FaFire />
     <span>Generate</span>
    </Button>
    {/* <div className="text-center my-3">or</div>
    <Button
     // todo: give this button a proper onClick handler
     type="button"
     className="w-fit mx-auto flex gap-1 items-center text-lg text-white"
     disabled={buttonDisabled}
     variant={"destructive"}
    >
     <GiDiceFire className="text-2xl" />
     <span>Randomize</span>
    </Button> */}
   </form>
  </Form>
 );
};
export default TextFieldForm;
