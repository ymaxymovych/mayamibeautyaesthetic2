
import React, { useState, useEffect } from 'react';
import { Button } from './components/Button';
import { Service, Review } from './types';

// Constants
const INSTAGRAM_URL = "https://www.instagram.com/mayami_beauty_aesthetic/";
const STUDIO_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Корекція та Фарбування брів',
    description: 'Створення ідеальної форми, що підкреслює вашу природну красу. Використовуємо лише преміальні барвники.',
    price: 'від 400 грн',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Ламінування брів',
    description: 'Ефект слухняних та густих брів на 1.5-2 місяці. Включає догляд з вітамінами.',
    price: 'від 700 грн',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Ламінування вій (Lash Lift)',
    description: 'Виразний погляд без нарощування. Природний вигин та зміцнення вій.',
    price: 'від 800 грн',
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&q=80&w=800'
  }
];

const REVIEWS: Review[] = [
  { id: '1', author: 'Марина К.', text: 'Найкращі брови в моєму житті! Сервіс на висоті.', rating: 5 },
  { id: '2', author: 'Олена С.', text: 'Ламінування вій трималося дуже довго. Рекомендую Mayami!', rating: 5 },
  { id: '3', author: 'Анна В.', text: 'Дуже затишна студія і професійні майстри.', rating: 5 },
];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-nude-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-widest text-[#8e7d6a]">
            MAYAMI
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide uppercase">
            <a href="#services" className="hover:text-[#8e7d6a] transition-colors">Послуги</a>
            <a href="#about" className="hover:text-[#8e7d6a] transition-colors">Про нас</a>
            <a href="#reviews" className="hover:text-[#8e7d6a] transition-colors">Відгуки</a>
            <Button label="Написати в Дірект" href={INSTAGRAM_URL} variant="primary" className="py-2.5 px-6" />
          </div>
          <div className="md:hidden">
             <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#8e7d6a] font-bold">Insta</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-nude-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-[#8e7d6a] mb-4 block animate-fade-in">Естетика вашого погляду</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            Підкресліть <br /> 
            <span className="italic">природну красу</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Студія професійного оформлення брів та вій. Створюємо естетику, яка захоплює.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button label="Записатися в Дірект" href={INSTAGRAM_URL} />
            <Button label="Переглянути послуги" href="#services" variant="outline" />
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#8e7d6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7m14-8l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 italic">Наші послуги</h2>
            <div className="w-20 h-0.5 bg-[#8e7d6a] mx-auto mb-4"></div>
            <p className="text-neutral-500">Виберіть ідеальний догляд для себе</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {STUDIO_SERVICES.map((service) => (
              <div key={service.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                <p className="text-neutral-600 mb-4 line-clamp-2">{service.description}</p>
                <div className="flex justify-between items-center border-t border-neutral-100 pt-4">
                  <span className="font-bold text-[#8e7d6a]">{service.price}</span>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold uppercase tracking-wider hover:text-[#8e7d6a] transition-colors">Детальніше →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-nude-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000" 
                  alt="Studio Interior" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#8e7d6a] rounded-3xl z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-serif mb-6">Більше ніж просто <span className="italic">краса</span></h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Студія Mayami Beauty Aesthetic заснована на принципах естетики та індивідуального підходу. Ми віримо, що кожна деталь має значення.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#8e7d6a]/20 flex items-center justify-center text-[#8e7d6a] font-bold">✓</span>
                  <span>Майстри з досвідом понад 5 років</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#8e7d6a]/20 flex items-center justify-center text-[#8e7d6a] font-bold">✓</span>
                  <span>Лише сертифіковані преміум-матеріали</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#8e7d6a]/20 flex items-center justify-center text-[#8e7d6a] font-bold">✓</span>
                  <span>Комфортна атмосфера та затишок</span>
                </li>
              </ul>
              <Button label="Наш Instagram" href={INSTAGRAM_URL} variant="outline" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-serif mb-16 italic">Відгуки клієнтів</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map(review => (
              <div key={review.id} className="bg-nude-50 p-8 rounded-2xl shadow-sm border border-neutral-100">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-neutral-600 mb-6 italic">"{review.text}"</p>
                <span className="font-bold text-sm uppercase tracking-widest text-neutral-400">— {review.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-serif mb-4 tracking-widest">MAYAMI</h2>
              <p className="text-neutral-400 max-w-xs">Брови та вії, які змушують обертатися. Завжди чекаємо на вас!</p>
            </div>
            <div className="flex gap-6">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#8e7d6a] transition-colors font-medium">Instagram</a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Mayami Beauty Aesthetic. Студія брів та вій. Всі права захищені.</p>
            <p className="mt-2 text-xs opacity-50 uppercase tracking-widest">Beauty Studio • Brow Bar • Lash Lift</p>
          </div>
        </div>
      </footer>

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-40">
        <Button label="Написати в Дірект" href={INSTAGRAM_URL} className="w-full shadow-2xl" />
      </div>
    </div>
  );
};

export default App;
