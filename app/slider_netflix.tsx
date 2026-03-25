"use client";

import { useState, useEffect } from "react";

// 🔥 TWOJE KSIĄŻKI
const customBooks = [
  {
    title: "Dinosaur Adventures",
    category: "Series",
    age: "4-8",
    pages: 85,
    asin: "B0GMPD4XVZ",
    image: "/covers/book_1.jpg",
    samples: ["/samples/book1/1.jpg","/samples/book1/2.jpg","/samples/book1/3.jpg","/samples/book1/4.jpg"],
  },
  {
    title: "Dinosaur Adventure",
    category: "Series",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM007",
    image: "/covers/book_2.jpg",
    samples: ["/samples/book2/1.jpg","/samples/book2/2.jpg","/samples/book2/3.jpg","/samples/book2/4.jpg"],
  },
  {
    title: "Dinosaur Adventure",
    category: "Series",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM008",
    image: "/covers/book_3.jpg",
    samples: ["/samples/book3/1.jpg","/samples/book3/2.jpg","/samples/book3/3.jpg","/samples/book3/4.jpg"],
  },
  {
    title: "Dinosaur Adventure",
    category: "Series",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM009",
    image: "/covers/book_4.jpg",
    samples: ["/samples/book4/1.jpg","/samples/book4/2.jpg","/samples/book4/3.jpg","/samples/book4/4.jpg"],
  },
  {
    title: "Dinosaur Adventure",
    category: "Series",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM010",
    image: "/covers/book_5.jpg",
    samples: ["/samples/book5/1.jpg","/samples/book5/2.jpg","/samples/book5/3.jpg","/samples/book5/4.jpg"],
  },
  {
    title: "Colorful Animal Alphabet",
    category: "Coloring",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM002",
    image: "/covers/book2.jpg",
    samples: ["/samples/book6/1.jpg","/samples/book6/2.jpg","/samples/book6/3.jpg","/samples/book6/4.jpg"],
  },
];

const allBooks = customBooks;

export default function Page() {
  const [filter, setFilter] = useState("All");
  const [activeSample, setActiveSample] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 🔥 PARALLAX
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 AUTOPLAY
  useEffect(() => {
    if (!activeSample || isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === activeSample.samples.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [activeSample, isHovered]);

  const categories = ["All", ...new Set(allBooks.map((b) => b.category))];

  const filteredBooks =
    filter === "All"
      ? allBooks
      : allBooks.filter((book) => book.category === filter);

  return (
    <div className="relative min-h-screen font-sans text-white overflow-x-hidden">

      {/* PARALLAX TŁO */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${offsetY * 0.3}px) scale(1.1)`
        }}
      >
        <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat blur-[2px] scale-125 brightness-75"></div>
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      <div className="relative z-10">

        {/* NAV */}
        <div className="flex justify-between items-center px-12 py-6 bg-white/80 backdrop-blur border-b sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-20" />
            <span className="text-3xl font-bold tracking-tight text-orange-500">
              Books
            </span>
          </div>

          <div className="flex gap-10 text-lg">
            <a href="#top" className="text-black hover:text-orange-500 transition">Home</a>
            <a href="#books" className="text-black hover:text-orange-500 transition">Books</a>
            <a href="#about" className="text-black hover:text-orange-500 transition">About</a>
          </div>
        </div>

        {/* HERO */}
        <div id="top" className="max-w-6xl mx-auto px-6 py-32 text-center">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Activity Books Kids Love
          </h2>

          <p className="text-gray-200 max-w-xl mx-auto text-lg mb-12">
            Fun, simple and engaging books designed to support creativity and early learning.
          </p>

          <div className="flex justify-center items-end gap-8 mb-14">
            <img src={allBooks[1].image} className="h-[220px] rounded-lg shadow-2xl rotate-[-8deg]" />
            <img src={allBooks[0].image} className="h-[260px] rounded-xl shadow-2xl scale-110 z-10" />
            <img src={allBooks[2].image} className="h-[220px] rounded-lg shadow-2xl rotate-[8deg]" />
          </div>

          {/* FILTER */}
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  document.getElementById("books")?.scrollIntoView({ behavior: "smooth" });
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
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div id="books" className="max-w-6xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 auto-rows-max">

            {filteredBooks.map((book, i) => (
              <div key={i} className="group perspective">

                <div className="relative transition duration-500 transform-style group-hover:rotate-y-12">

                  <div className="absolute inset-0 bg-black/20 blur-xl translate-y-6 rounded-xl"></div>

                  <div className="relative bg-white p-3 rounded-xl shadow-xl">
                    <img src={book.image} className="h-[200px] object-contain" />
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center bg-black/80 rounded-xl text-center px-2">
                    <p className="text-white text-xs mb-2">{book.title}</p>

                    <button
                      onClick={() => {
                        setActiveSample(book);
                        setCurrentSlide(0);
                      }}
                      className="bg-white text-black px-4 py-1 rounded-full mb-2 hover:bg-orange-500 hover:text-white"
                    >
                      Sample
                    </button>

                    <a href={`https://www.amazon.com/dp/${book.asin}`} target="_blank">
                      <button className="bg-white text-black px-4 py-1 rounded-full hover:bg-orange-500 hover:text-white">
                        View
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
          <h3 className="text-3xl font-semibold mb-4">About</h3>
          <p className="text-gray-200">
            We create high-quality activity books designed to entertain, educate, and inspire kids.
          </p>
        </div>

        {/* FOOTER */}
        <div className="text-center text-sm text-gray-300 py-10 border-t border-white/20">
          © 2026 J RAVEN B
        </div>

        {/* 🔥 NETFLIX SLIDER */}
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
                src={activeSample.samples[currentSlide]}
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
        `}</style>

      </div>
    </div>
  );
}