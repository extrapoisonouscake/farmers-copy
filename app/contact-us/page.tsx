"use client";
import { ContactUsForm } from "./form";
import { ContactInfo } from "./info";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">We’d Love to Hear From You</h1>
        <p>
          Whether you're planning your trip or already here, feel free to reach
          out!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <ContactInfo />
        <ContactUsForm />
      </div>
    </div>
  );
}
