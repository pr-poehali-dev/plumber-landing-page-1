import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface WhyUsSectionProps {
  phone: string;
  reasons: Array<{ icon: string; title: string; description: string }>;
}

export default function WhyUsSection({ phone, reasons }: WhyUsSectionProps) {
  return (
    <section id="services" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={reason.icon as any} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <a href={`tel:${phone}`}>
              <Icon name="Phone" size={20} className="mr-2" />
              Вызвать мастера
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
