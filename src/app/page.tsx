'use client';

import { useState, useEffect } from 'react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'AK Kašpárek & Partneři | Moderní Právní Služby';

    const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#111827"/><text y=".9em" x=".1em" font-size="80" font-family="serif" fill="#D4AF37">A</text></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  const navLinks = [
    { href: '#sluzby', label: 'Právní Služby' },
    { href: '#nas-tym', label: 'Náš Tým' },
    { href: '#pristup', label: 'Náš Přístup' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const services = [
    {
      title: 'Občanské Právo',
      description: 'Zastupování v občanskoprávních sporech, smluvní agenda a ochrana osobnosti. Hájíme vaše práva s maximálním nasazením.',
      image: '/images/civil-law-book-ring.jpg',
    },
    {
      title: 'Trestní Právo',
      description: 'Obhajoba v trestním řízení od přípravného stadia až po soud. Poskytujeme diskrétní a profesionální právní pomoc.',
      image: '/images/criminal-law-book-folder.jpg',
    },
    {
      title: 'Obchodní a firemní právo',
      description: 'Komplexní právní poradenství pro firmy, od založení společnosti přes korporátní agendu až po řešení obchodních sporů.',
      image: '/images/commercial-law-desk-items.jpg',
    },
    {
      title: 'Soudní spory a litigace',
      description: 'Efektivní zastupování před soudy všech stupňů. Naším cílem je rychlé a úspěšné vyřešení vašeho případu.',
      image: '/images/justice-gavel-scales.jpg',
    },
    {
      title: 'Administrativní Právo',
      description: 'Podpora v jednání s úřady, zastupování ve správním řízení a řešení záležitostí mezinárodního práva, včetně pasové agendy.',
      image: '/images/czech-passport-admin-law.jpg',
    }
  ];

  const teamMembers = [
    { name: 'JUDr. Zbyněk Kašpárek, LL.M.', image: '/images/team-zbynek-kasparek-portrait.jpg' },
    { name: 'JUDr. Zdeněk Kašpárek, CSc.', image: '/images/team-zdenek-kasparek-portrait.png' },
    { name: 'JUDr. Jan Charuza', image: '/images/team-jan-charuza-portrait.png' },
    { name: 'Pavla Nohejlová', image: '/images/team-pavla-nohejlova-portrait.png' },
  ];

  const handleLinkClick = () => {
      setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-gray-300 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-3">
             <img src="/images/logo-akkas-parek.png" alt="Logo AK Kašpárek" className="h-10 w-auto filter invert brightness-0 contrast-200 hue-rotate-[210deg] saturate-0"/>
             <span className="font-serif text-xl font-bold text-white tracking-wider">KAŠPÁREK</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">{link.label}</a>
            ))}
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50">
             <img src={isMenuOpen ? 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg' : 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg'} alt="Menu Icon" className="h-8 w-8 text-white" style={{ filter: 'invert(1)' }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-950/95 z-40 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-3xl font-serif text-white hover:text-[#D4AF37] transition-colors duration-300">{link.label}</a>
        ))}
      </div>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url('/images/legal-services-corporate-buildings.jpg')`}}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-4">Právní jistota. Osobní přístup.</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">Poskytujeme komplexní právní služby s důrazem na efektivitu, profesionalitu a naprostou spokojenost našich klientů.</p>
            <a href="#kontakt" className="bg-[#D4AF37] text-gray-900 font-bold py-3 px-8 rounded-sm hover:bg-opacity-90 transition-colors duration-300 text-lg">Sjednat konzultaci</a>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-20 md:py-28 bg_gray-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-white">Naše Specializace</h2>
                    <div className="w-24 h-px bg-[#D4AF37] mx-auto mt-4"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden group">
                            <img src={service.image} alt={service.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="p-8">
                                <h3 className="text-2xl font-serif text-[#D4AF37] mb-3">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Our Approach Section */}
        <section id="pristup" className="py-20 md:py-28 bg-gray-900">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Váš úspěch je naší prioritou</h2>
                    <div className="w-24 h-px bg-[#D4AF37] mb-8"></div>
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>Kvalifikovaný právní rozbor je základem každého řešení. Postupujeme efektivně, aby byl váš případ úspěšně a rychle vyřešen k vaší plné spokojenosti.</p>
                        <p>Po ukončení případu vám vrátíme veškeré podklady. Advokátní spis je následně bezpečně archivován po zákonem stanovenou dobu v naší kanceláři, což zaručuje naprostou diskrétnost a bezpečí.</p>
                        <p>Naším závazkem je transparentnost, důvěra a budování dlouhodobých vztahů s klienty.</p>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <img src="/images/client-consultation-finance.jpg" alt="Konzultace s klientem" className="rounded-lg shadow-2xl shadow-black/30 w-full h-auto object-cover" />
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section id="nas-tym" className="py-20 md:py-28 bg_gray-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-white">Seznamte se s naším týmem</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Profesionálové, na které se můžete spolehnout.</p>
                    <div className="w-24 h-px bg-[#D4AF37] mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative overflow-hidden rounded-lg">
                                <img src={member.image} alt={member.name} className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"/>
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
                            </div>
                            <h3 className="text-lg font-semibold text-white mt-4">{member.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-20 md:py-28 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-white">Kontaktujte nás</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Jsme zde pro vás. Domluvte si schůzku a proberme, jak vám můžeme pomoci.</p>
                    <div className="w-24 h-px bg-[#D4AF37] mx-auto mt-4"></div>
                </div>
                <div className="max-w-4xl mx-auto bg-gray-800 p-8 md:p-12 rounded-lg grid md:grid-cols-2 gap-8 text-center md:text-left">
                    <div className="border-b md:border-b-0 md:border-r border-gray-700 pb-8 md:pb-0 md:pr-8">
                        <h3 className="text-2xl font-serif text-[#D4AF37] mb-4">Adresa kanceláře</h3>
                        <p className="text-gray-300 text-lg">[Doplnit ulici a číslo popisné]</p>
                        <p className="text-gray-300 text-lg">[Doplnit PSČ a město]</p>
                        <p className="text-gray-400 text-sm mt-2">Česká republika</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif text-[#D4AF37] mb-4">Spojení</h3>
                        <p className="text-gray-300 text-lg">Email: <a href="mailto:info@akkasparek.cz" className="hover:text-[#D4AF37] transition-colors">info@akkasparek.cz</a></p>
                        <p className="text-gray-300 text-lg mt-2">Telefon: <a href="tel:+420123456789" className="hover:text-[#D4AF37] transition-colors">+420 123 456 789</a></p>
                        <p className="text-gray-400 text-sm mt-4">IČO: [Doplnit IČO]</p>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800">
         <div className="container mx-auto px-6 py-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} AK Kašpárek & Partneři. Všechna práva vyhrazena.</p>
            <p className="mt-2 text-sm">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D4AF37]">DigitalFusion</a></p>
         </div>
      </footer>
    </div>
  );
}

export default Page;
