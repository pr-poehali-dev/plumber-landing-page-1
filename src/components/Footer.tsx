export default function Footer() {
  return (
    <footer className="py-8 bg-foreground text-white/80">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">© 2024 Сантехник 24/7. Все права защищены</p>
        <div className="flex gap-4 justify-center text-sm">
          <a href="#" className="hover:text-white">Политика конфиденциальности</a>
          <a href="#" className="hover:text-white">Публичная оферта</a>
        </div>
      </div>
    </footer>
  );
}
