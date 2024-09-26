import "./globals.css";
import Link from "next/link";
import { Inter, Iceland, Instrument_Sans } from 'next/font/google';

// Import the fonts with CSS variable settings
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', className: "Inter" });
const iceland = Iceland({ subsets: ['latin'], weight: '400', className: "Iceland", variable: '--font-iceland', });
const instrument = Instrument_Sans({ subsets: ['latin'], weight: '400', className: "Instrument Sans", variable: '--font-instrument' })
export const metadata = {
  title: "Stocktimal",
  description: "Stocktimal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${iceland.variable} ${instrument.variable} antialiased min-h-screen bg-black font-inter`}
      >
        {/* Text using Iceland font */}
        <div className="font-iceland text-[21px] py-1.5 font-semibold text-center text-white">
          Stocktimal
        </div>

        <nav className="text-white flex justify-between items-center px-8 py-4 border-b border-gray-600 border-b-[1px] border-white">
          <ul className="flex w-full max-w-[1440px] m-auto items-center justify-center ">
            <Link className="hover:underline cursor-pointer flex-1 border-r-[1px] border-white text-center" href="/">Home</Link>
            <Link className="hover:underline cursor-pointer flex-1 border-r-[1px] border-white text-center" href="/pricing">Pricing</Link>
            <Link className="hover:underline cursor-pointer flex-1 border-r-[1px] border-white text-center" href="/customer-data">Customer Data</Link>
            <Link className="hover:underline cursor-pointer flex-1 border-r-[1px] border-white text-center" href="/inventory-management">Inventory Management</Link>
            <Link className="hover:underline cursor-pointer flex-1 text-center" href="/cost-saving-tips">Cost Saving Tips</Link>
          </ul>
        </nav>

        {/* Child components */}
        {children}
      </body>
    </html>
  );
}
