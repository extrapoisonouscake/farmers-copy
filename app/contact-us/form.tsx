import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormInput } from "@/components/ui/input";
import { FormTextarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
const schema = z.object({
  name: z.string().min(1, "Your name is required."),
  email: z
    .string()
    .min(1, "Your e-mail is required.")
    .email("Please enter a valid e-mail."),
  message: z
    .string()
    .min(10, "Please enter at least 10 characters.")
    .max(
      1000,
      "Your message is too long. Please shorten it to 1000 characters."
    ),
});
export function ContactUsForm() {
  const { register, ...form } = useForm({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  const onSubmit = async () => {
    // simulating a server request
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Your message was successfully sent!");
  };
  return (
    <Card className="md:w-[400px]">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>We typically respond within 2 hours.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row justify-between">
        <form
          className="flex flex-col gap-4 w-full rounded-2xl"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput
            {...register("name")}
            label="Your Name"
            id="name"
            placeholder="John Doe"
          />
          <FormInput
            {...register("email")}
            label="Your E-mail"
            id="email"
            placeholder="john.doe@gmail.com"
          />
          <FormTextarea
            {...register("message")}
            label="Your Message"
            id="message"
            placeholder="Start typing..."
          />
          <Button className="w-full py-2">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
