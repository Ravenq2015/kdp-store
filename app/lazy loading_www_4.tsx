"use client";

import { useState, useEffect, useRef } from "react";

// GENERATOR 55 BOOKS
const allBooks = Array.from({ length: 55 }, (_, i) => {
  const index = i + 1;

  const categories = ["Coloring", "Maze", "Workbook"];
  const category = categories[i % categories.length];

  return {
    title: `Kids Activity Book ${index}`,
    price: `$${(5.99 + (i % 5)).toFixed(2)}`,
    category,
    age: category === "Coloring" ? "3-7" : category === "Maze" ? "5-9" : "4-10",
    pages: 40 + (i % 50),
    asin: `B0TEST${String(index).padStart(4, "0")}`,
    image: `/covers/book${index}.jpg`,
    sample: `/sample${index}.pdf`,
  };
});

export default function Page() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const loaderRef = useRef(null);

  const filteredBooks = allBooks.filter((book) =>
    filter === "All" ? true : book.category === filter
  );

  const visibleBooks = filteredBooks.slice(0, visibleCount);

  // INFINITE SCROLL
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

        <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-10" />
          <span className="text-xl font-bold tracking-tight">KDP Books</span>
        </div>

        <div className="flex gap-10 text-sm text-gray-500">
          <a href="#top">Home</a>
          <a href="#books">Books</a>
          <a href="#about">About</a>
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

      {/* FEATURED */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {allBooks.slice(0, 10).map((book, i) => (
            <div key={i} className="group perspective">

              <div className="relative transition duration-500 transform-style group-hover:rotate-y-12">

                <div className="absolute inset-0 bg-black/20 blur-xl translate-y-6 rounded-xl"></div>

                <div className="absolute left-0 top-2 bottom-2 w-[10px] bg-gradient-to-r from-gray-800 to-gray-500 rounded-l"></div>

                <div className="relative ml-[10px] bg-white p-3 rounded-xl shadow-xl">
                  <img
                    src={book.image}
                    loading="lazy"
                    className="h-[200px] object-contain"
                  />
                </div>

                {/* HOVER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center bg-black/50 rounded-xl">

                  <a href={book.sample} target="_blank">
                    <button className="bg-orange-500 text-white px-5 py-2 rounded-full mb-2 hover:bg-orange-600 transition">
                      Sample
                    </button>
                  </a>

                  <a href={`https://www.amazon.com/dp/${book.asin}`} target="_blank">
                    <button className="bg-white px-5 py-2 rounded-full hover:bg-gray-200 transition">
                      View
                    </button>
                  </a>

                </div>

              </div>

              <h3 className="mt-4 text-sm text-center">
                {book.title}
              </h3>

            </div>
          ))}

        </div>
      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-8 mb-20">
        {["All", "Coloring", "Maze", "Workbook"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(12); // reset scrolla
            }}
            className={`text-sm pb-1 ${
              filter === cat
                ? "border-b-2 border-black text-black"
                : "text-gray-400 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* LIST */}
      <div id="books" className="max-w-5xl mx-auto px-6 space-y-10">

        {visibleBooks.map((book, index) => (
          <div key={index} className="flex gap-10 items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition">

            <img
              src={book.image}
              loading="lazy"
              className="w-[140px] object-contain"
            />

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>

              <p className="text-gray-500 text-sm mb-3">
                Ages {book.age} • {book.pages} pages
              </p>

              <div className="flex items-center gap-5">
                <span className="font-semibold text-lg">{book.price}</span>

                <a href={`https://www.amazon.com/dp/${book.asin}`} target="_blank">
                  <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                    View Book
                  </button>
                </a>
              </div>
            </div>

          </div>
        ))}

        {/* OBSERVER TRIGGER */}
        <div ref={loaderRef} className="h-20 flex items-center justify-center text-gray-400">
          Loading more...
        </div>

      </div>

      {/* ABOUT */}
      <div id="about" className="max-w-3xl mx-auto text-center py-24 px-6">
        <h3 className="text-3xl font-semibold mb-4">About</h3>
        <p className="text-gray-500">
          We create high-quality activity books designed to entertain, educate, and inspire kids.
        </p>
      </div>

      {/* FOOTER */}
      <div className="text-center text-sm text-gray-400 py-10 border-t">
        © 2026 J RAVEN B
      </div>

      {/* CSS */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .group-hover\\:rotate-y-12:hover {
          transform: rotateY(12deg);
        }
      `}</style>

    </div>
  );
}