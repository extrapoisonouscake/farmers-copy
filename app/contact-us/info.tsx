//  Tourism Saskatchewan 123 Prairie Way, Regina, SK S4P 3V7 📞 1-800-123-4567 📧 info@tourismsk.ca
// Follow Us:
// Facebook: /TourismSaskatchewan
// Instagram: @ExploreSK

import { Card, CardContent } from "@/components/ui/card";
import {
  ADDRESS,
  COMPANY_NAME,
  PHONE_NUMBER,
  SOCIAL_NETWORKS,
} from "@/constants/info";
import { Phone, Pin, Rss } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

// Twitter: @Tourism_SK
export function ContactInfo() {
  return (
    <Card className="flex-1">
      <CardContent>
        <div className="flex flex-col gap-2">
          <ExtendedTextWithIconAndLabel icon={Pin} label={COMPANY_NAME}>
            {ADDRESS}
          </ExtendedTextWithIconAndLabel>

          <ExtendedTextWithIconAndLabel icon={Phone} label={"Phone"}>
            {PHONE_NUMBER}
          </ExtendedTextWithIconAndLabel>
          <div className="flex gap-1 items-center">
            <Rss className="size-4" />
            <p className="font-bold">Follow Us:</p>
          </div>
          <ul className="flex gap-4">
            {SOCIAL_NETWORKS.map(({ label, href, icon: Icon }) => (
              <Link
                href={href}
                key={href}
                className="flex items-center gap-1.5"
              >
                <Icon className="inline-block size-5" />
                {label}
              </Link>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
export function ExtendedTextWithIconAndLabel({
  icon: Icon,
  children,
  label,
}: {
  children: ReactNode;
  icon: any;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1 items-center">
        <Icon className="size-4 min-w-4" />
        <p className="font-bold">{label}</p>
      </div>
      <p>{children}</p>
    </div>
  );
}
