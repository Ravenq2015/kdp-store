"use client";

import { useState } from "react";

export default function Home() {
  const booksData = [
    {
      title: "Easter Coloring Book",
      price: "$6.99",
      age: "4-8",
      pages: 50,
      image: "/covers/book1.jpg",
    },
    {
      title: "Cute Animals Coloring",
      price: "$7.99",
      age: "3-7",
      pages: 60,
      image: "/covers/book2.jpg",
    },
    {
      title: "ABC Learning Book",
      price: "$8.99",
      age: "4-6",
      pages: 70,
      image: "/covers/book3.jpg",
    },
    {
      title: "Maze Puzzle Fun",
      price: "$6.49",
      age: "5-8",
      pages: 55,
      image: "/covers/book4.jpg",
    },
    {
      title: "Cut & Color Activity",
      price: "$7.49",
      age: "4-8",
      pages: 65,
      image: "/covers/book5.jpg",
    },
  ];

  return (
    <main className="bg-white text-black">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">KDP Studio</div>

          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-orange-500">Home</a>
            <a href="#books" className="hover:text-orange-500">Books</a>
            <a href="#about" className="hover:text-orange-500">About</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative w-full py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-yellow-100 opacity-40 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Premium Coloring Books for Kids
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Fun, educational and beautifully designed activity books your kids will love.
          </p>

          <div className="flex justify-center gap-4">
            <a href="#books">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition font-semibold shadow-lg">
                Browse Books
              </button>
            </a>

            <button className="border border-gray-300 hover:border-orange-400 px-6 py-3 rounded-xl transition">
              View Samples
            </button>
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section id="books" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Books
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {booksData.map((book, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden">

              {/* BADGE */}
              <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full z-10">
                Bestseller
              </div>

              {/* IMAGE */}
              <div className="relative perspective">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto transform group-hover:rotate-y-6 group-hover:scale-105 transition duration-500"
                />

                {/* HOVER */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center gap-3">

                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                    View Sample
                  </button>

                  <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                    Buy Now
                  </button>

                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{book.title}</h3>

                <p className="text-gray-500 text-sm">
                  Ages {book.age} • {book.pages} pages
                </p>

                <div className="mt-3 flex justify-between items-center">
                  <span className="font-bold text-orange-500">
                    {book.price}
                  </span>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* TRUST */}
      <section id="about" className="py-16 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">
          Loved by Parents & Kids
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto">
          Thousands of happy customers worldwide. High-quality designs,
          fun activities, and zero boredom.
        </p>
      </section>

      {/* STYLES */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .rotate-y-6 {
          transform: rotateY(6deg);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

    </main>
  );
}