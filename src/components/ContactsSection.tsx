import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ContactsSectionProps {
  phone: string;
  telegram: string;
  whatsapp: string;
}

export default function ContactsSection({ phone, telegram, whatsapp }: ContactsSectionProps) {
  return (
    <section id="contacts" className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Контакты</h2>
        <p className="text-xl mb-8 opacity-90">Работаем круглосуточно, 7 дней в неделю</p>
        
        <div className="flex flex-col gap-4 max-w-md mx-auto mb-8">
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <a href={`tel:${phone}`}>
              <Icon name="Phone" size={20} className="mr-2" />
              {phone}
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <a href={telegram} target="_blank" rel="noopener noreferrer">
              <Icon name="Send" size={20} className="mr-2" />
              Telegram
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={20} />
            <span>Без выходных 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={20} />
            <span>По всей Москве</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Award" size={20} />
            <span>Гарантия 12 мес</span>
          </div>
        </div>
      </div>
    </section>
  );
}
