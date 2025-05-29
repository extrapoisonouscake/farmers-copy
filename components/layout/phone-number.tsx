import { PHONE_NUMBER } from "@/constants/info";
import { Phone } from "lucide-react";
import { TextWithIconAndLabel } from "./footer";

export function PhoneNumber({ className }: { className?: string }) {
  return (
    <TextWithIconAndLabel label="Phone" icon={Phone}>
      <a href={`tel:${PHONE_NUMBER}`} className={className}>
        {PHONE_NUMBER}11
      </a>
    </TextWithIconAndLabel>
  );
}
