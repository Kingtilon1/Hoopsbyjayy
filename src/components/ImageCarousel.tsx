
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TrainingImage {
  src: string;
  alt: string;
  caption?: string;
}

const trainingImages: TrainingImage[] = [
  {
    src: "/lovable-uploads/61c643ac-ef35-4570-8c72-40d9269c3dca.png",
    alt: "Young basketball player practicing on indoor court",
    caption: "Youth Development Program"
  },
  {
    src: "/lovable-uploads/3f18c2e1-022e-4c58-a3bf-ba06142850c5.png",
    alt: "Basketball player shooting form",
    caption: "Advanced Shooting Training"
  },
  {
    src: "/lovable-uploads/f90bc4df-24d8-46bc-bced-efe5982e518b.png",
    alt: "Team training session at basketball facility",
    caption: "Team Training Programs"
  },
  {
    src: "/lovable-uploads/7cb157ec-8453-4bd4-8187-a66ee801563b.png",
    alt: "Youth player practicing shooting technique",
    caption: "Individual Skill Development"
  }
];

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {trainingImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <AspectRatio ratio={4/3} className="bg-muted">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg object-cover w-full h-full object-top"
                  />
                </AspectRatio>
                {image.caption && (
                  <p className="text-sm text-center mt-2 text-muted-foreground">
                    {image.caption}
                  </p>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
