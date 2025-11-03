import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface GallerySectionProps {
  phone: string;
}

const galleryImages = [
  {
    src: 'https://cdn.poehali.dev/projects/0cfa42a0-1daf-45d3-a076-37d3f2b46473/files/9935970e-dd49-410a-b22d-c7b8b7005f72.jpg',
    alt: 'Ремонт смесителя в ванной',
  },
  {
    src: 'https://cdn.poehali.dev/projects/0cfa42a0-1daf-45d3-a076-37d3f2b46473/files/d3b416a0-30ee-42ff-8143-35470262cfc0.jpg',
    alt: 'Установка водонагревателя',
  },
  {
    src: 'https://cdn.poehali.dev/projects/0cfa42a0-1daf-45d3-a076-37d3f2b46473/files/9b193cde-ced1-4d33-bcb4-40da76dfb2b0.jpg',
    alt: 'Установка унитаза',
  },
  {
    src: 'https://cdn.poehali.dev/projects/0cfa42a0-1daf-45d3-a076-37d3f2b46473/files/9935970e-dd49-410a-b22d-c7b8b7005f72.jpg',
    alt: 'Замена труб',
  },
  {
    src: 'https://cdn.poehali.dev/projects/0cfa42a0-1daf-45d3-a076-37d3f2b46473/files/d3b416a0-30ee-42ff-8143-35470262cfc0.jpg',
    alt: 'Ремонт бойлера',
  },
  {
    src: 'https://cdn.poehali.dev/projects/0cfa42a0-1daf-45d3-a076-37d3f2b46473/files/9b193cde-ced1-4d33-bcb4-40da76dfb2b0.jpg',
    alt: 'Установка раковины',
  },
];

export default function GallerySection({ phone }: GallerySectionProps) {
  return (
    <section id="gallery" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши работы</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
          {galleryImages.map((image, i) => (
            <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg">
            <a href={`tel:${phone}`}>
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать такую же работу
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
