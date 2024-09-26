
"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";

export default function Component() {
  return (
    <Navbar fluid color="dark" theme={{
      "root": {
        "base": "bg-black py-2.5 border-b border-white",
        "bordered": {
          "on": "border",
          "off": ""
        },
        "inner": {
          "base": "flex md:flex-col mx-auto flex flex-wrap items-center md:justify-between",
          "fluid": {
            "on": "",
            "off": "container"
          }
        }
      },
      "brand": {
        "base": "flex items-center text-white "
      },
      "collapse": {
        "base": " bg-black md:flex w-full md:block pb-2 mt-[-15px] md:mt-0",
        "list": "md:justify-around mt-4 flex flex-col md:mt-0 md:flex-row md:text-sm md:font-medium",
        "hidden": {
          "on": "hidden",
          "off": ""
        }
      },
      "link": {
        "base": "block flex-1 py-2 pl-3 pr-4 md:p-0",
        "active": {
          "on": "bg-cyan-700 text-white  md:bg-transparent text-white",
          "off": "text-white"
        },
        "disabled": {
          "on": "text-gray-400 hover:cursor-not-allowed",
          "off": ""
        }
      },
      "toggle": {
        "base": "!bg-black inline-flex items-center md:block hiddend-lg p-3 text-sm text-white md:hidden",
        "icon": "h-6 w-6 shrink-0"
      }
    }}>
      <Navbar.Toggle />
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-[22px] font-semibold dark:text-white md:mb-3 font-iceland">Stocktimal</span>
      </Navbar.Brand>


      <Navbar.Collapse >
        <Navbar.Link className="text-white hover:text-white font-inter hover:underline cursor-pointer flex-1 md:border-r-[1px] border-white text-center" href="/">Home</Navbar.Link>
        <Navbar.Link className="text-white hover:text-white font-inter hover:underline cursor-pointer flex-1 md:border-r-[1px] border-white text-center" href="/pricing">Pricing</Navbar.Link>
        <Navbar.Link className="text-white hover:text-white font-inter hover:underline cursor-pointer flex-1 md:border-r-[1px] border-white text-center" href="/customer-data">Customer Data</Navbar.Link>
        <Navbar.Link className="text-white hover:text-white font-inter hover:underline cursor-pointer flex-1 md:border-r-[1px] border-white text-center" href="/inventory-management">Inventory Management</Navbar.Link>
        <Navbar.Link className="text-white hover:text-white font-inter hover:underline cursor-pointer flex-1 text-center" href="/cost-saving-tips">Cost Saving Tips</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
