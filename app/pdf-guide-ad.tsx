import { Card, CardContent } from "@/components/ui/card";

export function PDFGuideAdvertisiment() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">PDF: Travel Guide and Maps</h3>
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <p className="flex-1">
            The 2025 Saskatchewan Travel Guide is an 88-page, magazine-style
            publication full of detailed information organized by four travel
            zones: Living Skies & Badlands, Prairie Life & City Lights,
            Unlimited Lakes & Parkland, and Northern Lights & Waterways. Each
            zone covers top travel suggestions, including family activities,
            Indigenous tourism destinations, rural boutique shopping, outdoor
            recreation and adventure, parks, camping and resort information,
            major attractions, hidden gems, and more. Double-page travel zone
            conceptual maps feature main cities, communities and highways, along
            with all provincial, regional, and national parks. Order your print
            copy/copies by filling out the online form at 
            <a
              href="https://bit.ly/TourSaskLit"
              className="text-blue-500"
              target="_blank"
            >
              https://bit.ly/TourSaskLit
            </a>
            .
          </p>
          <img
            src={"/travel-guide.jpeg"}
            className="max-h-[250px] rounded-lg object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
}
