import Icon from '@/components/ui/icon';

interface FloatingButtonProps {
  whatsapp: string;
}

export default function FloatingButton({ whatsapp }: FloatingButtonProps) {
  return (
    <a
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-secondary hover:bg-secondary/90 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={28} />
    </a>
  );
}
