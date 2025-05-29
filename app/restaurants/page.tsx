"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FlipCard } from "@/components/ui/flip-card";
import { MapPinned } from "lucide-react";
import Link from "next/link";

const RESTAURANTS = [
  {
    thumbnail: "field-n-fork.png",
    name: "Field & Fork",
    description: "Local ingredients. Big flavour.",
    features: ["Vegetarian options", "Weekend brunch", "Award-winning chef"],
    link: "https://waskesiu-lodge.ca",
    place: "Regina",
  },
  {
    thumbnail: "field-n-fork.png",
    name: "Field & Fork",
    description: "Local ingredients. Big flavour.",
    features: ["Vegetarian options", "Weekend brunch", "Award-winning chef"],
    link: "https://waskesiu-lodge.ca",
    place: "Regina",
  },
  {
    thumbnail: "field-n-fork.png",
    name: "Field & Fork",
    description: "Local ingredients. Big flavour.",
    features: ["Vegetarian options", "Weekend brunch", "Award-winning chef"],
    link: "https://waskesiu-lodge.ca",
    place: "Regina",
  },
  {
    thumbnail: "field-n-fork.png",
    name: "Field & Fork",
    description: "Local ingredients. Big flavour.",
    features: ["Vegetarian options", "Weekend brunch", "Award-winning chef"],
    link: "https://waskesiu-lodge.ca",
    place: "Regina",
  },
  {
    thumbnail: "field-n-fork.png",
    name: "Field & Fork",
    description: "Local ingredients. Big flavour.",
    features: ["Vegetarian options", "Weekend brunch", "Award-winning chef"],
    link: "https://waskesiu-lodge.ca",
    place: "Regina",
  },
];
export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <img
          src={"/restaurants/thumbnail.png"}
          className="w-full max-h-[300px] object-cover rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">A Taste of Saskatchewan</h1>
          <p>
            From farm-to-table bistros to multicultural delights, Saskatchewan's
            food scene is as rich as its history. Explore our top picks:
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {RESTAURANTS.map(
          ({ name, thumbnail, description, features, link, place }) => (
            <FlipCard
              key={name}
              front={
                <Card className="flex justify-center flex-col size-full rounded-lg">
                  <CardContent className="flex flex-col gap-2 p-4">
                    <img
                      src={`/restaurants/${thumbnail}`}
                      className="w-full max-h-[150px] object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold">{name}</h3>
                      <div className="flex gap-1.5 items-center text-muted-foreground">
                        <MapPinned className="size-4" />
                        <p>{place}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              }
              back={
                <Card className="size-full bg-white p-0">
                  <CardContent className="size-full flex flex-col gap-3 justify-between p-4">
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
                  </CardContent>
                </Card>
              }
            />
          )
        )}
      </div>
    </div>
  );
}
