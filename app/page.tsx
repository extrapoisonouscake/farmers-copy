"use client";
import { Carousel } from "./carousel";
import { NewsletterForm } from "./newsletter-form";
import { PDFGuideAdvertisiment } from "./pdf-guide-ad";
import { UpcomingEvents } from "./upcoming-events";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <Carousel />
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-4xl font-bold text-primary text-center">
            Discover the Heart of Canada
          </h1>
          <p className="text-center text-lg max-w-[800px]">
            Explore sweeping prairies, serene lakes, vibrant festivals, and
            welcoming communities.
          </p>
          <p className="text-center text-lg max-w-[800px]">
            Saskatchewan offers endless adventure—from stargazing in Grasslands
            National Park to fishing in northern lakes, and everything in
            between.
          </p>
        </div>

        <PDFGuideAdvertisiment />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <UpcomingEvents />
        <NewsletterForm />
      </div>
    </div>
  );
}
