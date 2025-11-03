import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  phone: string;
  telegram: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function Header({ phone, telegram, isMenuOpen, setIsMenuOpen, scrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" className="text-primary" size={28} />
            <span className="text-xl font-bold text-foreground">Сантехник 24/7</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('prices')} className="text-sm hover:text-primary transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild size="sm" variant="outline">
              <a href={telegram} target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={16} className="mr-2" />
                Написать
              </a>
            </Button>
            <Button asChild size="sm">
              <a href={`tel:${phone}`}>
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить
              </a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-primary">
              Услуги
            </button>
            <button onClick={() => scrollToSection('prices')} className="text-left py-2 hover:text-primary">
              Цены
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left py-2 hover:text-primary">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2 hover:text-primary">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-left py-2 hover:text-primary">
              Контакты
            </button>
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild size="sm" variant="outline" className="w-full">
                <a href={telegram} target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={16} className="mr-2" />
                  Написать в Telegram
                </a>
              </Button>
              <Button asChild size="sm" className="w-full">
                <a href={`tel:${phone}`}>
                  <Icon name="Phone" size={16} className="mr-2" />
                  Позвонить
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
