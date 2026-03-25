"use client";

import { useState, useEffect, useRef } from "react";

// 🔥 TWOJE RĘCZNE KSIĄŻKI (EDYTUJ TU)
const customBooks = [
  {
    title: "The Adventures of the Little Dinosaur",
    price: "$8.99",
    category: "Series",
    age: "4-8",
    pages: 85,
    asin: "B0GMPD4XVZ",
    image: "/covers/book1.jpg",
    sample: "/sample1.pdf",
  },
  {
    title: "Colorful Animal Alphabet",
    price: "$6.99",
    category: "Coloring",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM001",
    image: "/covers/book2.jpg",
    sample: "/sample2.pdf",
  },
  {
    title: "Animals",
    price: "$6.99",
    category: "Maze",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM002",
    image: "/covers/book3.jpg",
    sample: "/sample2.pdf",
  },
  {
    title: "Calm & Quiet",
    price: "$6.99",
    category: "Maze",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM003",
    image: "/covers/book4.jpg",
    sample: "/sample2.pdf",
  },
  {
    title: "Coloring Book for Kids",
    price: "$6.99",
    category: "Coloring",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM004",
    image: "/covers/book5.jpg",
    sample: "/sample2.pdf",
  },
  {
    title: "Find the Difference!",
    price: "$6.99",
    category: "Coloring",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM005",
    image: "/covers/book6.jpg",
    sample: "/sample2.pdf",
  },
  {
    title: "The Adventures of the Little Dinosaur",
    price: "$6.99",
    category: "Series",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM006",
    image: "/covers/book7.jpg",
    sample: "/sample2.pdf",
  },
  {
    title: "The Adventures of the Little Dinosaur",
    price: "$6.99",
    category: "Series",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM007",
    image: "/covers/book8.jpg",
    sample: "/sample2.pdf",
  },
  {
    title: "The Adventures of the Little Dinosaur",
    price: "$6.99",
    category: "Series",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM008",
    image: "/covers/book9.jpg",
    sample: "/sample2.pdf",
  },
  {
    title: "The Adventures of the Little Dinosaur",
    price: "$6.99",
    category: "Series",
    age: "5-9",
    pages: 70,
    asin: "B0CUSTOM009",
    image: "/covers/book10.jpg",
    sample: "/sample2.pdf",
  },
];

// 🔥 GENERATOR RESZTY
const generatedBooks = Array.from({ length: 53 }, (_, i) => {
  const index = i + 3;

  const categories = ["Coloring", "Maze", "Workbook", "Series"];
  const category = categories[i % categories.length];

  return {
    title: `Kids Activity Book ${index}`,
    price: `$${(5.99 + (i % 5)).toFixed(2)}`,
    category,
    age:
      category === "Coloring"
        ? "3-7"
        : category === "Maze"
        ? "5-9"
        : "4-10",
    pages: 40 + (i % 50),
    asin: `B0TEST${String(index).padStart(4, "0")}`,
    image: `/covers/book${index}.jpg`,
    sample: `/sample${index}.pdf`,
  };
});

const allBooks = [...customBooks, ...generatedBooks];

export default function Page() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const loaderRef = useRef(null);

  const categories = ["All", ...new Set(allBooks.map((b) => b.category))];

  // ✅ JEDYNA POPRAWKA — FILTR
  const filteredBooks = allBooks.filter((book) =>
    filter === "All"
      ? true
      : String(book.category).trim() === String(filter).trim()
  );

  const visibleBooks = filteredBooks.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 12);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-900 min-h-screen font-sans">

      {/* NAV */}
      <div className="flex justify-between items-center px-12 py-6 bg-white/80 backdrop-blur border-b sticky top-0 z-50">

        <div className="flex items-center gap-3 relative group">

          <div className="relative cursor-pointer">
            <img src="/logo.png" className="h-16" />
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition shadow-lg whitespace-nowrap">
              Author Page
            </div>
          </div>

          <span className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent transition group-hover:from-orange-500 group-hover:to-orange-300">
            KDP Books
          </span>

        </div>

        <div className="flex gap-10 text-base uppercase tracking-wider text-gray-600 font-semibold">
          <a href="#top" className="hover:text-black transition">HOME</a>
          <a href="#books" className="hover:text-black transition">BOOKS</a>
          <a href="#about" className="hover:text-black transition">ABOUT</a>
        </div>

      </div>

      {/* HERO */}
      <div id="top" className="max-w-6xl mx-auto px-6 py-32 text-center">

        <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
          Activity Books Kids Love
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          Fun, simple and engaging books designed to support creativity and early learning.
        </p>

      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-4 mb-20 flex-wrap">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(12);
            }}
            className={`px-5 py-2 rounded-full ${
              filter === cat
                ? "bg-orange-500 text-white"
                : "bg-white border"
            }`}
          >
            {cat}
          </button>
        ))}

      </div>

      {/* LIST */}
      <div id="books" className="max-w-5xl mx-auto px-6 space-y-10">

        {visibleBooks.map((book, index) => (
          <div key={index} className="flex gap-10 items-center bg-white p-6 rounded-2xl shadow-sm">
            <img src={book.image} className="w-[140px]" />
            <div>
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-500 text-sm">
                Ages {book.age} • {book.pages} pages
              </p>
              <span className="font-bold">{book.price}</span>
            </div>
          </div>
        ))}

        <div ref={loaderRef} className="h-20"></div>

      </div>

    </div>
  );
}