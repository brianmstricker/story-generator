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
   <form className="relative" onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
     control={form.control}
     name="body"
     render={({ field }) => (
      <FormItem className="space-y-2">
       <FormLabel className="text-lg sm:text-2xl">What story do you have in mind?</FormLabel>
       <FormControl>
        <Textarea {...field} placeholder="Write your prompt here..." className="w-full border rounded-md p-3 h-[30vh] text-base" />
       </FormControl>
       <FormDescription className="text-[13px]">Example: firefighter fights fire monsters</FormDescription>
       <FormMessage />
      </FormItem>
     )}
    />
    <div className="mt-6 flex items-center justify-center gap-4">
     <Button
      className="w-fit min-[810px]:mx-auto flex gap-1 items-center text-sm min-[810px]:text-lg text-white bg-blue-700 hover:bg-blue-700/80"
      disabled={buttonDisabled}
     >
      <FaFire className="text-xl" />
      <span>Generate</span>
     </Button>
     <div className="min-[810px]:absolute min-[810px]:-left-[4.25rem] min-[810px]:top-11">
      <Button
       type="button"
       className="w-fit min-[810px]:mx-auto flex gap-1 items-center relative group"
       disabled={buttonDisabled}
       variant={"destructive"}
      >
       <GiDiceFire className="text-2xl text-white" />
       <span className="text-sm min-[810px]:text-xs min-[810px]:absolute min-[810px]:opacity-0 min-[810px]:pointer-events-none group-hover:opacity-100 -bottom-6 text-foreground group-focus:opacity-100 transition-opacity duration-200">
        Randomize
       </span>
      </Button>
     </div>
    </div>
   </form>
  </Form>
 );
};
export default TextFieldForm;
