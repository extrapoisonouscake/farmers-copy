import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
const items = [
  {
    heading: "Heading",
    description: "Desc",
    image: "gem-lakes-trail.jpg",
  },
  {
    heading: "Heading",
    description: "Desc",
    image: "regina-park.jpg",
  },
  {
    heading: "Heading",
    description: "Desc",
    image: "image.png",
  },
  {
    heading: "Heading",
    description: "Desc",
    image: "saskatoon.jpg",
  },
];
export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden w-full h-[300px] relative">
      <NavigationButton
        className="left-4"
        label="Go to the previous image"
        icon={ChevronLeft}
        onClick={scrollPrev}
      />
      <div className="size-full" ref={emblaRef}>
        <div className="flex h-full">
          {items.map(({ heading, description, image }) => (
            <div className="min-w-0 flex-[0_0_100%]" key={image}>
              <img
                className="size-full object-cover rounded-xl"
                src={`/carousel/${image}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <NavigationButton
        className="right-4"
        label="Go to the next image"
        icon={ChevronRight}
        onClick={scrollNext}
      />
    </div>
  );
}
function NavigationButton({
  className,
  label,
  icon: Icon,
  onClick,
  disabled,
}: {
  className: string;
  label: string;
  icon: any;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      variant="ghost"
      className={cn(
        "text-white border-0 hover:bg-transparent hover:text-white shadow-2xl absolute size-10 z-10 rounded-full top-1/2 -translate-y-1/2 p-1 ",
        className
      )}
      aria-label={label}
    >
      <Icon className="size-10" />
    </Button>
  );
}
