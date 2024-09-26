"use client"
import Image from 'next/image';
import React from 'react';

function App() {
  return (
    <div className="text-white">
      <header className="text-center py-16">
        <h1 style={{ letterSpacing: "-0.8px", lineHeight: "1" }} className="text-[40px] md:text-[76px] md:w-3/6 capitalize m-auto font-bold mb-6">Accelerate your business</h1>
        <p className="text-lg max-w-4xl mx-auto px-2 font-instrument">
          Unlock the power of predictive analytics with our AI-driven software, designed to analyze historical sales data, market trends, and seasonal patterns. By considering external factors like competition, economic shifts, and customer behavior, our solution accurately forecasts demand. Stay ahead of the curve by maintaining optimal stock levels, reducing waste, and maximizing profitability.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="relative h-auto" style={{ aspectRatio: "1075/754" }} >
          <Image src="/image1.png" fill alt='image1' />
        </div>
        <div className="relative h-auto" style={{ aspectRatio: "1075/754" }} >
          <Image src="/image2.png" fill alt='image2' />
        </div>
      </section>

      <div className="bg-black py-16 text-center">
        <h2 className="text-[34px] md:text-[60px] capitalize m-auto font-bold mb-6">What our website does</h2>
      </div>
    </div>
  );
}

export default App;
