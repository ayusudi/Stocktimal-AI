"use client"
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import dynamic from 'next/dynamic'
const Carousel = dynamic(() => import('3d-react-carousal').then((mod) => mod.Carousel), { ssr: false });

function App() {
  let slides = [
    <img src="/image3.png" alt="1" key="1" />,
    <img src="/image2.png" alt="2" key="2" />,
    <img src="/image1.png" alt="3" key="3" />,
    <img src="/image3.png" alt="4" key="4" />,
    <img src="/image2.png" alt="5" key="5" />,
    <img src="/image1.png" alt="6" key="6" />,
  ];

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
        <Carousel slides={slides} autoplay={true} interval={3000} />
      </div>
    </div>
  );
}

export default App;
