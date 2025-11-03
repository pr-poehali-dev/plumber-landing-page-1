import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PricesSection from '@/components/PricesSection';
import WhyUsSection from '@/components/WhyUsSection';
import ReviewsSection from '@/components/ReviewsSection';
import GallerySection from '@/components/GallerySection';
import FaqSection from '@/components/FaqSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

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
      <Header
        phone={PHONE}
        telegram={TELEGRAM}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection phone={PHONE} whatsapp={WHATSAPP} />

      <PricesSection phone={PHONE} telegram={TELEGRAM} services={services} />

      <WhyUsSection phone={PHONE} reasons={reasons} />

      <ReviewsSection phone={PHONE} whatsapp={WHATSAPP} reviews={reviews} />

      <GallerySection phone={PHONE} />

      <FaqSection phone={PHONE} faqItems={faqItems} />

      <ContactsSection phone={PHONE} telegram={TELEGRAM} whatsapp={WHATSAPP} />

      <Footer />

      <FloatingButton whatsapp={WHATSAPP} />
    </div>
  );
}
