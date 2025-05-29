import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";
const events = [
  {
    title: "Saskatoon Jazz Festival",
    date: "June 28 – July 7 | Saskatoon",
    description: "Enjoy world-class music in the heart of the Prairies.",
  },
  {
    title: "Regina Folk Festival",
    date: "August 9 – 11 | Victoria Park, Regina",
    description: "A celebration of music, food, and art.",
  },
  {
    title: "Moose Jaw Sidewalk Days",
    date: "July 4 – 6 | Moose Jaw",
    description:
      "Live entertainment, family fun, and open-air shopping downtown",
  },
];
export function UpcomingEvents() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>
          Don't miss what's happening this season!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-3">
          {events.map(({ title, date, description }, i) => (
            <li key={i} className="flex flex-col gap-1">
              <p className="font-semibold text-lg">{title}</p>
              <div className="flex gap-1 items-center">
                <Calendar className="size-3" />
                <p className="text-sm">{date}</p>
              </div>
              <p className="">{description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
