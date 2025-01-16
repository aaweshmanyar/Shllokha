import React from "react";
import { Search } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="w-full py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold tracking-tighter">
          YOGA
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-700 hover:text-gray-900">
            HOME
          </a>
          <a href="/profile" className="text-gray-700 hover:text-gray-900">
            PROFILE
          </a>
          <a href="/gallery" className="text-gray-700 hover:text-gray-900">
            GALLERY
          </a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900">
            CONTACT
          </a>
        </nav>
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="w-[200px] rounded-full bg-[#1d3b35] px-4 py-2 text-sm text-white placeholder:text-gray-300"
          />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-300" />
        </div>
      </div>
    </header>
  );
}
