"use client";

import { useState } from "react";

const booksData = [
  {
    title: "Easter Coloring Book",
    price: "$6.99",
    category: "Coloring",
    age: "4-8",
    pages: 50,
    asin: "B0XXXXXXX",
    image: "/book1.jpg",
    sample: "/sample1.pdf",
  },
  {
    title: "Maze Puzzle Book",
    price: "$5.99",
    category: "Maze",
    age: "5-9",
    pages: 60,
    asin: "B0XXXXXXX",
    image: "/book2.jpg",
    sample: "/sample2.pdf",
  },
  {
    title: "Feelings Workbook",
    price: "$7.99",
    category: "Workbook",
    age: "4-10",
    pages: 70,
    asin: "B0XXXXXXX",
    image: "/book3.jpg",
    sample: "/sample3.pdf",
  },
  {
    title: "Animal Coloring Book",
    price: "$6.49",
    category: "Coloring",
    age: "3-7",
    pages: 45,
    asin: "B0XXXXXXX",
    image: "/book4.jpg",
    sample: "/sample4.pdf",
  },
  {
    title: "Tracing Workbook",
    price: "$7.49",
    category: "Workbook",
    age: "3-6",
    pages: 55,
    asin: "B0XXXXXXX",
    image: "/book5.jpg",
    sample: "/sample5.pdf",
  },
];

export default function Page() {
  const [filter, setFilter] = useState("All");

  const filteredBooks = booksData.filter((book) =>
    filter === "All" ? true : book.category === filter
  );

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-900 min-h-screen font-sans">

      {/* NAV */}
      <div className="flex justify-between items-center px-12 py-6 bg-white/80 backdrop-blur border-b sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-tight text-black">
          KDP Books
        </h1>

        <div className="flex gap-10 text-sm text-gray-500">
          <a href="#top" className="hover:text-black transition">Home</a>
          <a href="#books" className="hover:text-black transition">Books</a>
          <a href="#about" className="hover:text-black transition">About</a>
        </div>
      </div>

      {/* HERO */}
      <div id="top" className="max-w-6xl mx-auto px-6 py-32 text-center">

        <h2 className="text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
          Activity Books Kids Love
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
          Fun, simple and engaging books designed to support creativity and early learning.
        </p>

      </div>

      {/* FEATURED WOW GRID */}
      <div className="max-w-6xl mx-auto px-6 mb-24">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {booksData.map((book, i) => (
            <div key={i} className="group">

              <div className="relative bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">

                <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center">

                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-[200px] object-contain transition duration-500 group-hover:scale-110"
                  />

                </div>

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-3 rounded-2xl">

                  <a href={book.sample} target="_blank">
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition hover:bg-orange-600 hover:scale-105">
                      Sample
                    </button>
                  </a>

                  <a
                    href={`https://www.amazon.com/dp/${book.asin}`}
                    target="_blank"
                  >
                    <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold transition hover:scale-105">
                      View
                    </button>
                  </a>

                </div>

              </div>

              <h3 className="mt-4 text-sm font-medium text-gray-800 text-center">
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
            onClick={() => setFilter(cat)}
            className={`text-sm pb-1 transition ${
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
      <div id="books" className="max-w-5xl mx-auto px-6 space-y-16">

        {filteredBooks.map((book, index) => (
          <div key={index} className="flex gap-10 items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition">

            <div className="relative group">

              <img
                src={book.image}
                className="w-[140px] object-contain"
              />

              {/* HOVER SAMPLE */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40 rounded-lg">

                <a href={book.sample} target="_blank">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 hover:scale-105 transition">
                    Sample
                  </button>
                </a>

              </div>

            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">
                {book.title}
              </h3>

              <p className="text-gray-500 text-sm mb-3">
                Ages {book.age} • {book.pages} pages
              </p>

              <div className="flex items-center gap-5">

                <span className="font-semibold text-lg">
                  {book.price}
                </span>

                <a
                  href={`https://www.amazon.com/dp/${book.asin}`}
                  target="_blank"
                >
                  <button className="text-sm bg-black text-white px-4 py-2 rounded-full hover:opacity-80 transition">
                    View Book
                  </button>
                </a>

              </div>

            </div>

          </div>
        ))}

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

    </div>
  );
}