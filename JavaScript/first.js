import React, { useState } from 'react';
import { Search, MapPin, User, ShoppingCart, Menu, ChevronDown } from 'lucide-react';

const SwastikMart = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productCategories = [
    {
      title: 'Clothes',
      image: 'https://placeholder-image-service.onrender.com/image/300x250?prompt=Fashion+clothing+display+with+various+styles+and+colors&id=clothes-123'
    },
    {
      title: 'Health & Personal Care',
      image: 'https://placeholder-image-service.onrender.com/image/300x250?prompt=Health+and+beauty+products+arranged+neatly&id=health-456'
    },
    {
      title: 'Furniture',
      image: 'https://placeholder-image-service.onrender.com/image/300x250?prompt=Modern+furniture+in+a+cozy+living+room&id=furniture-789'
    },
    {
      title: 'Electronics',
      image: 'https://placeholder-image-service.onrender.com/image/300x250?prompt=Latest+electronics+gadgets+and+devices&id=electronics-012'
    },
    {
      title: 'Beauty Picks',
      image: 'https://placeholder-image-service.onrender.com/image/300x250?prompt=Beauty+and+cosmetic+products+display&id=beauty-345'
    },
    {
      title: 'Pet Care',
      image: 'https://placeholder-image-service.onrender.com/image/300x250?prompt=Pet+supplies+and+accessories&id=pet-678'
    },
    {
      title: 'New Arrival in Toys',
      image: 'https://placeholder-image-service.onrender.com/image/300x250?prompt=Colorful+toys+and+games+collection&id=toys-901'
    },
    {
      title: 'Discover Fashion Trends',
      image: 'https://placeholder-image-service.onrender.com/image/300x250?prompt=Trendy+fashion+outfits+and+accessories&id=fashion-234'
    }
  ];

  const footerLinks = [
    {
      title: 'Get to Know Us',
      links: ['Careers', 'Blog', 'About SwastikMart', 'Investor Relations', 'SwastikMart Devices', 'SwastikMart Science']
    },
    {
      title: 'Make Money with Us',
      links: ['Sell products on Amazon', 'Sell on Amazon Business', 'Sell apps on SwastikMart', 'Become an Affiliate', 'Advertise Your Products', 'Self-Publish with Us', 'Host an SwastikMart Hub', 'See More Make Money with Us']
    },
    {
      title: 'SwastikMart Payment Products',
      links: ['SwastikMart Business Card', 'Shop with Points', 'Reload Your Balance', 'SwastikMart Currency Converter']
    },
    {
      title: 'Let Us Help You',
      links: ['Amazon and COVID-19', 'Your Account', 'Your Orders', 'Shipping Rates & Policies', 'Returns & Replacements', 'Manage Your Content and Devices', 'Help']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-primary text-white">
        {/* Top Navigation */}
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-24 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-primary font-bold text-xl">SwastikMart</span>
            </div>
          </div>

          {/* Delivery Location */}
          <div className="hidden md:flex items-center space-x-1 cursor-pointer hover:text-accent">
            <MapPin size={18} />
            <div className="text-sm">
              <p className="text-xs text-muted-foreground">Deliver to</p>
              <p className="font-medium">India</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="flex bg-white rounded-md overflow-hidden">
              <select className="bg-gray-100 px-2 text-gray-700 border-r border-gray-300">
                <option>All</option>
              </select>
              <input
                type="text"
                placeholder="Search SwastikMart"
                className="flex-1 px-4 py-2 text-gray-800 outline-none"
              />
              <button className="bg-accent px-4 py-2 hover:bg-accent/90 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* User Account */}
          <div className="hidden md:flex flex-col cursor-pointer hover:text-accent">
            <span className="text-xs">Hello, sign in</span>
            <span className="font-medium">Account & Lists</span>
          </div>

          {/* Returns & Orders */}
          <div className="hidden md:flex flex-col cursor-pointer hover:text-accent">
            <span className="text-xs">Returns</span>
            <span className="font-medium">& Orders</span>
          </div>

          {/* Cart */}
          <div className="flex items-center cursor-pointer hover:text-accent">
            <ShoppingCart size={24} />
            <span className="ml-1 font-medium">Cart</span>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="bg-primary-dark">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div 
              className="flex items-center cursor-pointer hover:text-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={18} className="mr-1" />
              <span>All</span>
            </div>
            
            <div className="hidden md:flex space-x-4">
              <p className="cursor-pointer hover:text-accent">Today's Deals</p>
              <p className="cursor-pointer hover:text-accent">Customer Service</p>
              <p className="cursor-pointer hover:text-accent">Registry</p>
              <p className="cursor-pointer hover:text-accent">Gift Cards</p>
              <p className="cursor-pointer hover:text-accent">Sell</p>
            </div>

            <div className="cursor-pointer hover:text-accent">
              Shop deals in Electronics
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-2 text-center">
          <p className="text-sm">
            You are on SwastikMart.com. You can also shop on SwastikMart India for millions of products with fast local delivery.{' '}
            <a href="#" className="text-accent hover:underline">Click here to go to SwastikMart.in</a>
          </p>
        </div>
      </div>

      {/* Product Categories Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-3">{category.title}</h2>
                <div className="h-48 bg-cover bg-center rounded-md mb-3" style={{ backgroundImage: `url(${category.image})` }} />
                <p className="text-primary cursor-pointer hover:underline">See more</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        {/* Back to Top */}
        <div className="bg-gray-700 py-4 text-center cursor-pointer hover:bg-gray-600">
          Back to Top
        </div>

        {/* Footer Links */}
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-white hover:underline text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logo */}
        <div className="border-t border-gray-700 py-6">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="w-32 h-10 bg-white rounded-md flex items-center justify-center">
              <span className="text-gray-800 font-bold text-lg">SwastikMart</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-gray-900 py-6">
          <div className="container mx-auto px-4">
            <div className="text-center text-sm text-gray-400">
              <div className="flex flex-wrap justify-center gap-4 mb-2">
                <a href="#" className="hover:underline">Conditions of Use</a>
                <a href="#" className="hover:underline">Privacy Notice</a>
                <a href="#" className="hover:underline">Consumer Health Data Privacy Disclosure</a>
                <a href="#" className="hover:underline">Your Ads Privacy Choices</a>
              </div>
              <p>© 2023-2024, SwastikMart.com, Inc. or its affiliates</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SwastikMart;
