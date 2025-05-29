"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FlipCard } from "@/components/ui/flip-card";
import { MapPinned } from "lucide-react";
import Link from "next/link";

const hotels = [
  {
    thumbnail: "elk-ridge-lodge.png",
    name: "Elk Ridge Lodge",
    description: "Lakefront comfort in Prince Albert National Park",
    features: ["Pet-friendly", "On-site dining", "Guided outdoor tours"],
    link: "https://waskesiu-lodge.ca",
    place: "Saskatoon",
  },
  {
    thumbnail: "prairie-sky-hotel.png",
    name: "Prairie Sky Hotel",
    description: "Modern comfort in the city core",
    features: [
      "Free WiFi & parking",
      "Breakfast included",
      "Rooftop terrace with skyline views",
    ],
    link: "https://waskesiu-lodge.ca",
    place: "Saskatoon",
  },
  {
    thumbnail: "elk-ridge-lodge.png",
    name: "Elk Ridge Lodge",
    description: "Lakefront comfort in Prince Albert National Park",
    features: ["Pet-friendly", "On-site dining", "Guided outdoor tours"],
    link: "https://waskesiu-lodge.ca",
    place: "Saskatoon",
  },
  {
    thumbnail: "prairie-sky-hotel.png",
    name: "Prairie Sky Hotel",
    description: "Modern comfort in the city core",
    features: [
      "Free WiFi & parking",
      "Breakfast included",
      "Rooftop terrace with skyline views",
    ],
    link: "https://waskesiu-lodge.ca",
    place: "Saskatoon",
  },
  {
    thumbnail: "elk-ridge-lodge.png",
    name: "Elk Ridge Lodge",
    description: "Lakefront comfort in Prince Albert National Park",
    features: ["Pet-friendly", "On-site dining", "Guided outdoor tours"],
    link: "https://waskesiu-lodge.ca",
    place: "Saskatoon",
  },
  {
    thumbnail: "prairie-sky-hotel.png",
    name: "Prairie Sky Hotel",
    description: "Modern comfort in the city core",
    features: [
      "Free WiFi & parking",
      "Breakfast included",
      "Rooftop terrace with skyline views",
    ],
    link: "https://waskesiu-lodge.ca",
    place: "Saskatoon",
  },
];
export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <img
          src={"/hotels/thumbnail.png"}
          className="w-full max-h-[300px] object-cover rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">
            Find Your Perfect Stay in Saskatchewan
          </h1>
          <p className="text-muted-fo">
            Explore cozy lodges, luxury hotels, rustic cabins, and welcoming
            B&Bs across the province. Hover or click on any listing for more
            details!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map(
          ({ name, thumbnail, description, features, link, place }) => (
            <FlipCard
              key={name}
              front={
                <div
                  className="flex justify-end p-4 flex-col size-full rounded-lg "
                  style={{
                    background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) ), url('/hotels/${thumbnail}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex gap-1.5 items-center text-neutral-200">
                    <MapPinned className="size-4" />
                    <p>{place}</p>
                  </div>
                  <h3 className="text-white text-2xl font-semibold">{name}</h3>
                </div>
              }
              back={
                <Card className="size-full justify-between p-4 flex flex-col gap-3 bg-white">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold">{name}</h3>
                      <p className="text-muted-foreground">{description}</p>
                    </div>
                    <ul className="list-disc list-inside flex flex-col gap-1">
                      {features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    href={link}
                    target="_blank"
                  >
                    <Button>Book Now</Button>
                  </Link>
                </Card>
              }
            />
          )
        )}
      </div>
    </div>
  );
}
