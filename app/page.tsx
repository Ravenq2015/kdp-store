"use client";
// @ts-nocheck
import { useState, useEffect } from "react";

// 🌍 TŁUMACZENIA (FINAL - BEZ BŁĘDÓW)
const translations = {
  en: {
    home: "Home",
    books: "Books",
    about: "About",
    aboutTitle: "About",
    sample: "Sample",
    view: "View on Amazon",
    heroTitle: "Creative Books for Growing Minds",
    heroDesc:
      "From coloring and puzzles to therapeutic workbooks and mandalas — thoughtfully designed to support creativity, focus, and emotional development.",

    aboutText: `We believe that every child learns best through curiosity, creativity, and play. That’s why we create books that go beyond simple entertainment — books that inspire imagination, support development, and bring real value to everyday learning.

Our collection includes a wide variety of thoughtfully designed content, from fun coloring books and engaging activity pages to educational workbooks, calming mandalas, puzzles, and therapeutic exercises.

Whether a child is exploring colors, solving challenges, relaxing with mindful patterns, or building early learning foundations, our books support every stage of growth.

Our mission is simple — to create books that children love and parents trust.`,
  },

  pl: {
    home: "Start",
    books: "Książki",
    about: "O nas",
    aboutTitle: "O nas",
    sample: "Podgląd",
    view: "Zobacz na Amazonie",
    heroTitle: "Kreatywne książki dla rozwijających się umysłów",
    heroDesc:
      "Od kolorowanek i łamigłówek po zeszyty terapeutyczne i mandale — wspierające rozwój i kreatywność.",

    aboutText: `Wierzymy, że każde dziecko uczy się najlepiej poprzez ciekawość, kreatywność i zabawę. Dlatego tworzymy książki, które wykraczają poza zwykłą rozrywkę.

Nasza kolekcja obejmuje szeroki wybór treści — od kolorowanek i zadań po zeszyty edukacyjne i mandale.

Nasze książki wspierają rozwój, koncentrację i kreatywność na każdym etapie.

Nasza misja jest prosta — tworzyć książki, które dzieci kochają.`,
  },
};

// 🌍 TŁUMACZENIA KATEGORII (ZGODNE Z DANYMI!)
const categoryTranslations = {
  en: {
    All: "All",
    Coloring: "Coloring",
    Activity: "Activity",
    Premium: "Premium",
    Series: "Series",
    Journal: "Journal",
    Kitchen: "Kitchen",
    Planners: "Planners",
    Mandalas: "Mandalas",
    "Polish edition": "Polish edition",
    Multilangual: "Multilangual", // MUSI być identycznie jak w danych
    "Christmas items": "Christmas items",
  },
  pl: {
    All: "Wszystkie",
    Coloring: "Kolorowanki",
    Activity: "Zadania",
    Premium: "Premium",
    Series: "Seria",
    Journal: "Dzienniki",
    Kitchen: "Kuchnia",
    Planners: "Planery",
    Mandale: "Mandale",
    "Polish edition": "Polskie wersje",
    Multilangual: "Wielojęzyczne",
    "Christmas items": "Świąteczne",
  },
};

// 🔥 TWOJE KSIĄŻKI
const SAMPLE_COUNT = 4;

const getSamples = (bookId: string) =>
  Array.from({ length: SAMPLE_COUNT }, (_, i) => `/samples/${bookId}/${i + 1}.jpg`);

const customBooks = [
    {
 title: "Easter Coloring Adventure!",
    categories: "Christmas items",
    age: "4-8",
    pages: 122,
    asin: "B0GPW7HSNR",
    image: "/covers/book14.jpg",
    samples: getSamples("book14"),
  },
  {
    title: "Animals",
    categories: "Multilangual",
    age: "3-7",
    pages: 89,
    asin: "B0G7Y44673",
    image: "/covers/book16.jpg",
    samples: getSamples("book16"),
  },
  {
    title: "Tosia and the secret of emotions",
   categories: "Premium",
    age: "3-7",
    pages: 82,
    asin: "B0G3KVKQT4",
    image: "/covers/book13.jpg",
    samples: getSamples("book13"),
  },
    {
    title: "The Magic of Christmas",
    categories: "Christmas items",
    age: "4-8",
    pages: 101,
    asin: "B0G6YL9T8Q",
    image: "/covers/book57.jpg",
    samples: getSamples("book57"),
  },
    {
    title: "Dinosaur Adventure",
    categories: "Series",
    age: "3-8",
    pages: 74,
    asin: "B0G4G2W7DK",
    image: "/covers/book_1.jpg",
    samples: getSamples("book1"),
  },
    {
    title: "Dinosaur Adventure",
    categories: "Series",
    age: "3-8",
    pages: 100,
    asin: "B0G4G7RLFP",
    image: "/covers/book_2.jpg",
    samples: getSamples("book2"),
  },
  {
    title: "Dinosaur Adventure",
    categories: "Series",
    age: "3-8",
    pages: 101,
    asin: "B0G4N4LY6L",
    image: "/covers/book_3.jpg",
    samples: getSamples("book3"),
  },
  {
    title: "Dinosaur Adventure",
    categories: "Series",
    age: "3-8",
    pages: 100,
    asin: "B0G4PCCK9W",
    image: "/covers/book_4.jpg",
    samples: getSamples("book4"),
  },
  {
    title: "Dinosaur Adventure",
    categories: "Series",
    age: "3-8",
    pages: 100,
    asin: "B0G48VYMZD",
    image: "/covers/book_5.jpg",
    samples: getSamples("book5"),
  },
    {
    title: "Dinosaur Adventure",
    categories: "Series",
    age: "3-8",
    pages: 100,
    asin: "B0G44RD9FJ",
    image: "/covers/book_6.jpg",
    samples: getSamples("book6"),
  },
    {
    title: "Dinosaur Adventure",
    categories: "Series",
    age: "3-8",
    pages: 100,
    asin: "B0G4D1XRXL",
    image: "/covers/book_7.jpg",
    samples: getSamples("book7"),
  },
    {
    title: "Dinosaur Adventure",
    categories: "Series",
    age: "3-8",
    pages: 100,
    asin: "B0G492HYJD",
    image: "/covers/book_8.jpg",
    samples: getSamples("book8"),
  },
    {
    title: "Dinosaur Adventure",
    categories: "Series",
    age: "3-8",
    pages: 100,
    asin: "B0G4CDLG15",
    image: "/covers/book_9.jpg",
    samples: getSamples("book9"),
  },
    {
    title: "Dinosaur Adventure",
    categories: "Series",
    age: "3-8",
    pages: 100,
    asin: "B0G4G9XW5X",
    image: "/covers/book_10.jpg",
    samples: getSamples("book10"),
  },
    {
    title: "Dinosaur Adventure",
    categories: "Series",
    age: "3-8",
    pages: 100,
    asin: "B0G4GDW5YQ",
    image: "/covers/book_11.jpg",
    samples: getSamples("book11"),
  },
    {
    title: "Dinosaur Adventure",
    categories: "Series",
    age: "3-8",
    pages: 101,
    asin: "B0G4LVXCC7",
    image: "/covers/book_12.jpg",
    samples: getSamples("book12"),
  },
  {
    title: "Colorful Animal Alphabet",
    categories: "Coloring",
    age: "3-8",
    pages: 74,
    asin: "B0FLWFQ4C7",
    image: "/covers/book15.jpg",
    samples: getSamples("book15"),
  },
   {
    title: "Calm & Quiet Activity Book for Kids",
    categories: "Activity",
    age: "4-8",
    pages: 83,
    asin: "B0GF7HG2CX",
    image: "/covers/book17.jpg",
    samples: getSamples("book17"),
  },
     {
    title: "Coloring Book For Kids",
    categories: "Coloring",
    age: "3-8",
    pages: 73,
    asin: "B0FWZTXB7B",
    image: "/covers/book18.jpg",
    samples: getSamples("book18"),
  },
     {
    title: "Micro-Joy Journal",
    categories: "Journal",
    age: "14-18",
    pages: 80,
    asin: "B0FWKMQ4KS",
    image: "/covers/book19.jpg",
   samples: getSamples("book19"),
  },
     {
    title: "Dziennik Mikro-Radości",
    categories: "Journal",
    age: "14-18",
    pages: 78,
    asin: "B0FSY1GTGB",
    image: "/covers/book20.jpg",
    samples: getSamples("book20"),
  },
     {
    title: "Find The Difference!",
    categories: "Coloring",
    age: "4-8",
    pages: 72,
    asin: "B0FWZPZWY1",
    image: "/covers/book21.jpg",
    samples: getSamples("book21"),
  },
     {
    title: "Easter Chicks",
    categories: "Christmas items",
    age: "3-8",
    pages: 88,
    asin: "B0GN33JTKT",
    image: "/covers/book22.jpg",
    samples: getSamples("book22"),
  },
     {
    title: "Food Drink & Sweets",
    categories: "Coloring",
    age: "3-8",
    pages: 72,
    asin: "B0G2RTHJZT",
    image: "/covers/book23.jpg",
    samples: getSamples("book23"),
  },
     {
    title: "Girl & Bunny",
    categories: "Coloring",
    age: "3-6",
    pages: 80,
    asin: "B0GMF8HP95",
    image: "/covers/book24.jpg",
    samples: getSamples("book24"),
  },
     {
    title: "Kolorowanka dla dzieci",
    categories: ["Coloring", "Polish edition"],
    age: "4-8",
    pages: 73,
    asin: "B0FWZM9XZG",
    image: "/covers/book25.jpg",
    samples: getSamples("book25"),
  },
     {
    title: "Lena i dom ukrytych myśli",
    categories: "Polish edition",
    age: "4-8",
    pages: 132,
    asin: "B0GLDV8M6M",
    image: "/covers/book26.jpg",
    samples: getSamples("book26"),
  },
     {
    title: "Podwodna przygoda Bąbelka",
    categories: "Polish edition",
    age: "3-7",
    pages: 88,
    asin: "B0G3GKGQDG",
    image: "/covers/book27.jpg",
    samples: getSamples("book27"),
  },
     {
    title: "Dynia która bała się ciemności",
    categories: "Polish edition",
    age: "3-8",
    pages: 95,
    asin: "B0FPWX75Z9",
    image: "/covers/book28.jpg",
    samples: getSamples("book28"),
  },
     {
    title: "Pumpkin who was afraid of dark",
    categories: "Premium",
    age: "3-8",
    pages: 95,
    asin: "B0FPX3LTT7",
    image: "/covers/book29.jpg",
    samples: getSamples("book29"),
  },
     {
    title: "The Quiet Hero",
    categories: "Premium",
    age: "4-8",
    pages: 87,
    asin: "B0GB786Z6D",
    image: "/covers/book30.jpg",
    samples: getSamples("book30"),
  },
     {
    title: "Sara i zaginiona melodia lasu",
    categories: ["Activity", "Polish edition"],
    age: "4-7",
    pages: 98,
    asin: "B0GD69V61B",
    image: "/covers/book31.jpg",
    samples: getSamples("book31"),
  },
     {
    title: "Studencka kuchnia za grosze",
    categories: "Kitchen",
    age: "17-18",
    pages: 134,
    asin: "B0FQ51L7S2",
    image: "/covers/book32.jpg",
    samples: getSamples("book32"),
  },
     {
    title: "When the River Stopped Moving",
    categories: "Series",
    age: "3-7",
    pages: 33,
    asin: "B0GCDR8KFX",
    image: "/covers/book33.jpg",
    samples: getSamples("book33"),
  },
     {
    title: "The Day Colors Began to Fade",
    categories: "Series",
    age: "3-7",
    pages: 33,
    asin: "B0GCNPDGS1",
    image: "/covers/book34.jpg",
    samples: getSamples("book34"),
  },
     {
    title: "The Night the Moon Needed Help",
    categories: "Series",
    age: "3-7",
    pages: 33,
    asin: "B0GCBPD4PL",
    image: "/covers/book35.jpg",
    samples: getSamples("book35"),
  },
     {
    title: "The Town That Forgot How to Play",
    categories: "Series",
    age: "3-7",
    pages: 34,
    asin: "B0GCN8XQ3M",
    image: "/covers/book36.jpg",
    samples: getSamples("book36"),
  },
  
   {
    title: "The Day the Forest Went Silent",
    categories: "Series",
    age: "3-7",
    pages: 32,
    asin: "B0GBTDHD9X",
    image: "/covers/book37.jpg",
    samples: getSamples("book37"),
  },
     {
    title: "The Small Explorer and the Hidden Door",
    categories: "Series",
    age: "3-7",
    pages: 34,
    asin: "B0GC5GZRVY",
    image: "/covers/book38.jpg",
    samples: getSamples("book38"),
  },
     {
    title: "Mandala Planner 2026",
    categories: "Planners",
    pages: 140,
    asin: "B0G62XYY2X",
    image: "/covers/book39.jpg",
    samples: getSamples("book39"),
  },
   {
    title: "Luna uczy się uspokajać",
    categories: "Series",
    age: "3-7",
    pages: 35,
    asin: "B0GHPT5YJP",
    image: "/covers/book40.jpg",
    samples: getSamples("book40"),
  },
     {
    title: "Luna uczy się cierpliwośći",
    categories: "Series",
    age: "3-7",
    pages: 34,
    asin: "B0GHQ98HMB",
    image: "/covers/book41.jpg",
    samples: getSamples("book41"),
  },
     {
    title: "Luna uczy się słuchać",
    categories: "Series",
    age: "3-7",
    pages: 33,
    asin: "B0GHPXXSTT",
    image: "/covers/book42.jpg",
    samples: getSamples("book42"),
  },
     {
    title: "Luna uczy się stawiać czoła strachowi",
    categories: "Series",
    age: "3-7",
    pages: 35,
    asin: "B0GQPRNLW8",
    image: "/covers/book43.jpg",
    samples: getSamples("book43"),
  },
     {
    title: "Luna uczy się o wielkich uczuciach",
    categories: "Series",
    age: "3-7",
    pages: 35,
    asin: "B0GQPPDZWV",
    image: "/covers/book44.jpg",
    samples: getSamples("book44"),
  },
     {
    title: "Luna uczy się życzliwości",
    categories: "Series",
    age: "3-7",
    pages: 35,
    asin: "B0GQQ8FN56",
    image: "/covers/book45.jpg",
    samples: getSamples("book45"),
  },
     {
    title: "Luna uczy się mówić nie",
    categories: "Series",
    age: "3-7",
    pages: 35,
    asin: "B0GQPVY4WS",
    image: "/covers/book46.jpg",
    samples: getSamples("book46"),
  },
     {
    title: "Luna uczy się próbować",
    categories: "Series",
    age: "5-9",
    pages: 70,
    asin: "",
    image: "/covers/book47.jpg",
    samples: getSamples("book47"),
  },
     {
    title: "Luna uczy się zauważać",
    categories: "Series",
    age: "5-9",
    pages: 70,
    asin: "",
    image: "/covers/book48.jpg",
    samples: getSamples("book48"),
  },
     {
    title: "The Disappearance of the Star",
    categories: "Multilangual",
    age: "4-8",
    pages: 76,
    asin: "B0G3X25TCJ",
    image: "/covers/book49.jpg",
    samples: getSamples("book49"),
  },
   {
    title: "Zuzia and the disspaparing colors",
    categories: "Premium",
    age: "4-9",
    pages: 97,
    asin: "B0FWJF44LN",
    image: "/covers/book50.jpg",
    samples: getSamples("book50"),
  },
     {
    title: "Zuzia i znikające kolory",
    categories: ["Premium", "Polish edition"],
    age: "4-9",
    pages: 97,
    asin: "B0FWJXKLD3",
    image: "/covers/book51.jpg",
    samples: getSamples("book51"),
  },
     {
    title: "Zwierzakowe Zawody",
    categories:["Coloring", "Activity"],
    age: "4-8",
    pages: 80,
    asin: "B0G32KYKYS",
    image: "/covers/book52.jpg",
    samples: getSamples("book52"),
  },
     {
    title: "Easter Bunnies",
    categories: "Christmas items",
    age: "4-6",
    pages: 85,
    asin: "B0GMPD4XVZ",
    image: "/covers/book53.jpg",
    samples: getSamples("book53"),
  },
     {
    title: "Coloring Book for Kids",
    categories: "Coloring",
   age: "3-8",
    pages: 73,
    asin: "B0FWZR8J1H",
    image: "/covers/book54.jpg",
    samples: getSamples("book54"),
  },
     {
    title: "Tosia i tajemnica emocji",
    categories: "Premium",
    age: "3-7",
    pages: 82,
    asin: "B0G1RXBF5H",
    image: "/covers/book55.jpg",
    samples: getSamples("book55"),
  },
     {
    title: "Luna uczy się być sobą",
    categories: "Series",
    age: "3-7",
    pages: 70,
    asin: "",
    image: "/covers/book56.jpg",
    samples: getSamples("book56"),
  },
   {
    title: "Student Kitchen on a Budget",
    categories: "Kitchen",
    age: "14-18",
    pages: 135,
    asin: "B0FQB6PJKL",
    image: "/covers/book58.jpg",
    samples: getSamples("book57"),
  },
     {
    title: "Tosia i potworek strachu",
    categories: ["Premium", "Polish edition"],
    age: "3-7",
    pages: 101,
    asin: "B0G2RQ22VS",
    image: "/covers/book59.jpg",
    samples: getSamples("book58"),
  },
      {
    title: "Tosia & the Scary Monster",
    categories: "Premium",
    age: "4-8",
    pages: 101,
    asin: "B0G6Y9SQK1",
    image: "/covers/book60.jpg",
    samples: getSamples("book60"),
  },
      {
    title: "Mandala Therapy",
    categories: "Mandalas",
    pages: 99,
    asin: "B0G4LSB56Y",
    image: "/covers/book61.jpg",
    samples: getSamples("book61"),
  },
      {
    title: "Animal Mandalas",
    categories: "Mandalas",
    pages: 100,
    asin: "B0G4R8JMZG",
    image: "/covers/book62.jpg",
    samples: getSamples("book62"),
  },
      {
    title: "Animal Head Mandalas",
    categories: "Mandalas",
    pages: 100,
    asin: "B0G4VZL3PJ",
    image: "/covers/book63.jpg",
    samples: getSamples("book63"),

  }
     ];
const allBooks = customBooks;

export default function Page() {
const [lang, setLang] = useState<"en" | "pl">("en");

type TranslationKey = keyof typeof translations["en"];
type CategoryKey = keyof typeof categoryTranslations["en"];

const t = (key: TranslationKey) => translations[lang][key];
const tc = (cat: CategoryKey | string) =>
  categoryTranslations[lang][cat as CategoryKey] || cat;

  const [filter, setFilter] = useState("All");
  type SampleType = {
  samples: string[];
};

const [activeSample, setActiveSample] = useState<SampleType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
    setOffsetY(window.scrollY);
    setShowTop(window.scrollY > 400);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
    if (!activeSample || isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === (activeSample?.samples.length || 1) - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [activeSample, isHovered]);

  const categories = [
  "All",
  ...new Set(allBooks.flatMap((b) => b.categories || [])),
];
  const filteredBooks =
  filter === "All"
    ? allBooks
    : allBooks.filter(
        (book) =>
          book.categories?.includes(filter) ||
          book.category === filter
      );
  return (
    <div className="relative min-h-screen font-sans text-white overflow-x-hidden">

      {/* 🔥 ANIMOWANY NAV */}
      <div className="relative flex justify-between items-center px-12 py-6 sticky top-0 z-50 overflow-hidden bg-white/80 backdrop-blur">

        <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-pink-300 to-yellow-200 animate-gradient"></div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute left-10 top-2 text-2xl animate-float1">⭐</span>
          <span className="absolute left-1/3 top-4 text-xl animate-float2">🦋</span>
          <span className="absolute right-1/3 top-1 text-xl animate-float2">✨</span>
        </div>

        <div className="relative z-10 flex justify-between items-center w-full">

          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-20" />
            <span className="text-3xl font-bold tracking-tight text-orange-600">
              Books
            </span>
          </div>

          <div className="flex gap-10 text-lg items-center">
            <button
               onClick={() => setLang(lang === "en" ? "pl" : "en")}
                 className="bg-black text-white px-3 py-1 rounded-full text-sm hover:bg-orange-500"
                    >
                      {lang === "en" ? "PL" : "EN"}
              </button>
            <a href="#top" className="flex items-center gap-2 text-black hover:text-orange-600 transition">
              🏠 <span>{t("home")}</span>
            </a>
            <a href="#books" className="flex items-center gap-2 text-black hover:text-orange-600 transition">
              📚 <span>{t("books")}</span>
            </a>
            <a href="#about" className="flex items-center gap-2 text-black hover:text-orange-600 transition">
              ⭐ <span>{t("about")}</span>
            </a>
          </div>

        </div>
      </div>

      {/* PARALLAX TŁO */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${offsetY * 0.3}px) scale(1.1)`
        }}
      >
        <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat blur-[2px] scale-125 brightness-75"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      <div className="relative z-10">

        {/* HERO */}
        <div id="top" className="max-w-6xl mx-auto px-6 py-32 text-center">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t("heroTitle")}
          </h2>

          <p className="text-gray-200 max-w-xl mx-auto text-lg mb-12">
            {t("heroDesc")}
          </p>

          <div className="flex justify-center items-end gap-8 mb-14">
            <img src={allBooks[1].image} className="h-[220px] rounded-lg shadow-2xl rotate-[-8deg]" />
            <img src={allBooks[2].image} className="h-[260px] rounded-xl shadow-2xl scale-110 z-10" />
            <img src={allBooks[15].image} className="h-[220px] rounded-lg shadow-2xl rotate-[8deg]" />
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
  setFilter(cat);

  const el = document.getElementById("books");
  const yOffset = -120;

  if (el) {
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
}}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    filter === cat
                      ? "bg-orange-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 border border-gray-200 hover:bg-black hover:text-white"
                  }
                `}
              >
                {tc(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div id="books" className="max-w-6xl mx-auto px-6 mb-24 scroll-mt-32">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 auto-rows-max">

            {filteredBooks.map((book, i) => (
              <div key={i} className="group perspective">
                <div className="relative transition duration-500 transform-style group-hover:rotate-y-12">
                  <div className="absolute inset-0 bg-black/20 blur-xl translate-y-6 rounded-xl"></div>

                  <div className="relative bg-white p-3 rounded-xl shadow-xl">
                    <img src={book.image} className="h-[200px] object-contain" />
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center bg-black/80 rounded-xl text-center px-2">
                    <p className="text-white text-xs">
                        Ages: {book.age}
                    </p>
                        <p className="text-white text-xs mb-2 opacity-80">
                            {book.pages} pages
                         </p>
                    <button
                      onClick={() => {
                        setActiveSample(book);
                        setCurrentSlide(0);
                      }}
                      className="bg-white text-black px-2 py-1 text-xs rounded-full mb-2 hover:bg-orange-500 hover:text-white whitespace-nowrap"
                    >
                      {t("sample")}
                    </button>

                    <a href={`https://www.amazon.com/dp/${book.asin}`} target="_blank">
                     <button className="bg-white text-black px-3 py-[2px] text-xs rounded-full hover:bg-orange-500 hover:text-white max-w-full">
                      {t("view")}
                      </button>
                    </a>
                  </div>
                </div>

                <h3 className="mt-4 text-sm text-center">{book.title}</h3>
              </div>
            ))}

          </div>
        </div>

        {/* ABOUT */}
        <div id="about" className="max-w-3xl mx-auto text-center py-24 px-6">
          <h3 className="text-3xl font-semibold mb-4">{t("aboutTitle")}</h3>

          <p className="text-gray-200 whitespace-pre-line">
  {t("aboutText")}
   </p>
        </div>

        {/* FOOTER */}
        <div className="text-center text-sm text-gray-300 py-10 border-t border-white/20">
          © 2026 J RAVEN B
        </div>

        {/* SLIDER */}
        {activeSample && (
          <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center">

            <button
              onClick={() => setActiveSample(null)}
              className="absolute top-6 right-6 text-white text-2xl hover:text-orange-500"
            >
              ✕
            </button>

            <div
              className="max-w-2xl w-full px-6 relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={activeSample?.samples?.[currentSlide]}
                className="w-full rounded-xl shadow-2xl transition duration-500"
              />

              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? activeSample.samples.length - 1 : prev - 1
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 text-orange-500 text-3xl hover:text-orange-600"
              >
                ←
              </button>

              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === activeSample.samples.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-500 text-3xl hover:text-orange-600"
              >
                →
              </button>

              <div className="flex justify-center mt-4 gap-2">
                {activeSample.samples.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 w-2 rounded-full cursor-pointer transition ${
                      i === currentSlide
                        ? "bg-orange-500 scale-125"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>
        )}

        <style jsx>{`
          .perspective { perspective: 1000px; }
          .transform-style { transform-style: preserve-3d; }
          .group-hover\\:rotate-y-12:hover { transform: rotateY(12deg); }

          @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
           }

          .animate-gradient {
          background-size: 200% 200%;
          background-position: 0% 50%;
          animation: gradientMove 6s ease infinite;
          }

          @keyframes float1 {
            0% { transform: translateY(0px) }
            50% { transform: translateY(-10px) }
            100% { transform: translateY(0px) }
          }

          @keyframes float2 {
            0% { transform: translateY(0px) }
            50% { transform: translateY(-6px) }
            100% { transform: translateY(0px) }
          }

          @keyframes float3 {
            0% { transform: translateY(0px) }
            50% { transform: translateY(-14px) }
            100% { transform: translateY(0px) }
          }

          .animate-float1 { animation: float1 4s ease-in-out infinite; }
          .animate-float2 { animation: float2 5s ease-in-out infinite; }
          .animate-float3 { animation: float3 6s ease-in-out infinite; }

        `}</style>

      </div>
{showTop && (
  <button
    onClick={() => {
      document.getElementById("books")?.scrollIntoView({
        behavior: "smooth",
      });
    }}
    style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}
    className="bg-orange-500 text-white px-4 py-3 rounded-full shadow-lg"
  >
    ↑
  </button>
)}
    </div>
  );
}
