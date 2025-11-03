import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const PHONE = '+79991234567';
const TELEGRAM = 'https://t.me/santehnik247';
const WHATSAPP = 'https://wa.me/79991234567';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: 'Устранение засора', price: 'от 1 500', icon: 'Droplets' },
    { name: 'Замена смесителя', price: 'от 1 200', icon: 'Wrench' },
    { name: 'Установка унитаза', price: 'от 3 500', icon: 'Home' },
    { name: 'Замена труб', price: 'от 2 000', icon: 'GitBranch' },
    { name: 'Установка стиральной машины', price: 'от 1 800', icon: 'Settings' },
    { name: 'Ремонт бойлера', price: 'от 2 500', icon: 'Thermometer' },
    { name: 'Установка счётчиков воды', price: 'от 1 500', icon: 'Gauge' },
    { name: 'Гидроизоляция ванной', price: 'от 5 000', icon: 'Shield' },
  ];

  const reasons = [
    {
      icon: 'Clock',
      title: 'Приезд 30–60 минут',
      description: 'Выезжаем в любую точку города максимально быстро',
    },
    {
      icon: 'Award',
      title: 'Гарантия до 12 месяцев',
      description: 'Официальная гарантия на все виды работ и материалы',
    },
    {
      icon: 'Users',
      title: '1 200+ выполненных вызовов',
      description: 'Довольные клиенты рекомендуют нас своим знакомым',
    },
    {
      icon: 'CheckCircle2',
      title: 'Работаем 24/7',
      description: 'Принимаем заявки круглосуточно, без выходных',
    },
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Приехали через 40 минут после звонка. Быстро устранили засор в ванной. Цены честные, работа качественная. Рекомендую!',
      rating: 5,
    },
    {
      name: 'Михаил Иванов',
      text: 'Заменили старый смеситель на кухне. Мастер аккуратный, все убрал за собой. Дали гарантию 12 месяцев. Спасибо!',
      rating: 5,
    },
    {
      name: 'Ольга Сидорова',
      text: 'Вызывала ночью, потекла труба. Приехали быстро, устранили проблему. Оплатила картой. Очень благодарна!',
      rating: 5,
    },
    {
      name: 'Дмитрий Козлов',
      text: 'Установили унитаз и раковину в новой квартире. Работу выполнили за 3 часа. Все работает отлично. Рекомендую!',
      rating: 5,
    },
  ];

  const faqItems = [
    {
      question: 'Как быстро вы приедете?',
      answer: 'Среднее время приезда составляет 30–60 минут в зависимости от района. В экстренных случаях стараемся приехать быстрее. Для уточнения времени',
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем наличные и банковские карты. Предоплата не требуется — оплата производится после выполнения работ и вашего одобрения. Для уточнения',
    },
    {
      question: 'Предоставляете ли вы гарантию?',
      answer: 'Да, мы предоставляем официальную гарантию до 12 месяцев на все виды работ и установленные материалы. Гарантия оформляется документально. Узнать подробнее:',
    },
    {
      question: 'Работаете ли вы в выходные и праздники?',
      answer: 'Да, мы работаем круглосуточно, 7 дней в неделю, включая выходные и праздничные дни. Для вызова мастера',
    },
    {
      question: 'Привозите ли вы материалы и запчасти?',
      answer: 'Да, мастер привозит необходимые расходные материалы. Если требуются специфические запчасти, мы согласовываем это заранее по телефону. Уточнить детали:',
    },
    {
      question: 'Сколько стоит выезд мастера?',
      answer: 'Выезд мастера для диагностики бесплатный при условии выполнения работ. Точная стоимость называется после осмотра. Для консультации',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
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
                <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={16} className="mr-2" />
                  Написать
                </a>
              </Button>
              <Button asChild size="sm">
                <a href={`tel:${PHONE}`}>
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
                  <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={16} className="mr-2" />
                    Написать в Telegram
                  </a>
                </Button>
                <Button asChild size="sm" className="w-full">
                  <a href={`tel:${PHONE}`}>
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

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
                <a href={`tel:${PHONE}`}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
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
                      <a href={`tel:${PHONE}`}>
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
                  <a href={`tel:${PHONE}`}>
                    <Icon name="Phone" size={20} className="mr-2" />
                    Узнать точную цену
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Написать в Telegram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <a href={`tel:${PHONE}`}>
                <Icon name="Phone" size={20} className="mr-2" />
                Вызвать мастера
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg mb-6">Станьте нашим следующим довольным клиентом!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={`tel:${PHONE}`}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши работы</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
              <img
                src="https://cdn.poehali.dev/projects/0cfa42a0-1daf-45d3-a076-37d3f2b46473/files/9935970e-dd49-410a-b22d-c7b8b7005f72.jpg"
                alt="Ремонт смесителя в ванной"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
              <img
                src="https://cdn.poehali.dev/projects/0cfa42a0-1daf-45d3-a076-37d3f2b46473/files/d3b416a0-30ee-42ff-8143-35470262cfc0.jpg"
                alt="Установка водонагревателя"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
              <img
                src="https://cdn.poehali.dev/projects/0cfa42a0-1daf-45d3-a076-37d3f2b46473/files/9b193cde-ced1-4d33-bcb4-40da76dfb2b0.jpg"
                alt="Установка унитаза"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
              <img
                src="https://cdn.poehali.dev/projects/0cfa42a0-1daf-45d3-a076-37d3f2b46473/files/9935970e-dd49-410a-b22d-c7b8b7005f72.jpg"
                alt="Замена труб"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
              <img
                src="https://cdn.poehali.dev/projects/0cfa42a0-1daf-45d3-a076-37d3f2b46473/files/d3b416a0-30ee-42ff-8143-35470262cfc0.jpg"
                alt="Ремонт бойлера"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
              <img
                src="https://cdn.poehali.dev/projects/0cfa42a0-1daf-45d3-a076-37d3f2b46473/files/9b193cde-ced1-4d33-bcb4-40da76dfb2b0.jpg"
                alt="Установка раковины"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <a href={`tel:${PHONE}`}>
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать такую же работу
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}{' '}
                    <a href={`tel:${PHONE}`} className="text-primary hover:underline font-medium">
                      позвонить
                    </a>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Контакты</h2>
          <p className="text-xl mb-8 opacity-90">Работаем круглосуточно, 7 дней в неделю</p>
          
          <div className="flex flex-col gap-4 max-w-md mx-auto mb-8">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <a href={`tel:${PHONE}`}>
                <Icon name="Phone" size={20} className="mr-2" />
                {PHONE}
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} className="mr-2" />
                Telegram
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
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

      <footer className="py-8 bg-foreground text-white/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-2">© 2024 Сантехник 24/7. Все права защищены</p>
          <div className="flex gap-4 justify-center text-sm">
            <a href="#" className="hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white">Публичная оферта</a>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-secondary hover:bg-secondary/90 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} />
      </a>
    </div>
  );
}