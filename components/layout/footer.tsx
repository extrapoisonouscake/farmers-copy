"use client";
import { ADDRESS, COMPANY_NAME, SOCIAL_NETWORKS } from "@/constants/info";
import { MailIcon, MapPinned, Phone } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { PhoneNumber } from "./phone-number";

export function Footer() {
  return (
    <footer
      className="p-8 mt-10 border-t border-border border-dotted flex gap-4 justify-between"
      style={{ alignItems: "end" }}
    >
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 w-full">
          <p>{COMPANY_NAME}</p>
          <TextWithIconAndLabel label="Address" icon={MapPinned}>
            <p>{ADDRESS}</p>
          </TextWithIconAndLabel>
          <TextWithIconAndLabel label="Phone" icon={Phone}>
            <PhoneNumber />
          </TextWithIconAndLabel>
          <TextWithIconAndLabel label="Email" icon={MailIcon}>
            <Link href="mailto:info@tourismsk.ca">info@tourismsk.ca</Link>
          </TextWithIconAndLabel>
        </div>
      </div>
      <div className="flex flex-col gap-2" style={{ alignItems: "end" }}>
        <p className="">Follow Us</p>
        <SocialNetworks />
      </div>
    </footer>
  );
}
export function TextWithIconAndLabel({
  icon: Icon,
  children,
  label,
}: {
  children: ReactNode;
  label: string;
  icon: any;
}) {
  return (
    <div className="flex gap-2 items-center">
      <Icon className="size-4 min-w-4" aria-label={label} />

      {children}
    </div>
  );
}

function SocialNetworks() {
  return (
    <div className="flex gap-4">
      {SOCIAL_NETWORKS.map(({ icon: Icon, href, label }) => (
        <a href={href} target="_blank" key={href}>
          <Icon className="size-5" aria-label={label} />
        </a>
      ))}
    </div>
  );
}
