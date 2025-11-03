import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  phone: string;
  whatsapp: string;
}

export default function HeroSection({ phone, whatsapp }: HeroSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Сантехник в Москве
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Срочный ремонт и установка сантехники. Выезд 24/7
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
            <div className="flex items-start gap-3 bg-white/80 backdrop-blur p-4 rounded-lg">
              <Icon name="Clock" className="text-primary mt-1" size={24} />
              <div>
                <p className="font-semibold">Приезд 30–60 минут</p>
                <p className="text-sm text-muted-foreground">По всей Москве</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/80 backdrop-blur p-4 rounded-lg">
              <Icon name="Award" className="text-primary mt-1" size={24} />
              <div>
                <p className="font-semibold">Гарантия до 12 месяцев</p>
                <p className="text-sm text-muted-foreground">На все работы</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/80 backdrop-blur p-4 rounded-lg">
              <Icon name="Users" className="text-primary mt-1" size={24} />
              <div>
                <p className="font-semibold">1 200+ вызовов</p>
                <p className="text-sm text-muted-foreground">Довольных клиентов</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button asChild size="lg" className="text-lg px-8">
              <a href={`tel:${phone}`}>
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Icon name="ShieldCheck" size={16} className="mr-2" />
              Без предоплаты
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Icon name="CreditCard" size={16} className="mr-2" />
              Оплата картой/наличными
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Icon name="Clock" size={16} className="mr-2" />
              Работаем 24/7
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
