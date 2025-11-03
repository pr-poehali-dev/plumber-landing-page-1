import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PricesSectionProps {
  phone: string;
  telegram: string;
  services: Array<{ name: string; price: string; icon: string }>;
}

export default function PricesSection({ phone, telegram, services }: PricesSectionProps) {
  return (
    <section id="prices" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Прайс-лист</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <Icon name={service.icon as any} className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
                        <p className="text-2xl font-bold text-primary">{service.price} ₽</p>
                      </div>
                    </div>
                  </div>
                  <Button asChild size="sm" className="w-full">
                    <a href={`tel:${phone}`}>
                      <Icon name="Phone" size={16} className="mr-2" />
                      Заказать
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Точная стоимость определяется после осмотра. Выезд мастера бесплатный!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={`tel:${phone}`}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Узнать точную цену
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={telegram} target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать в Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
