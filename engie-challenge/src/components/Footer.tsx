// components/Footer.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 mt-9">
      <div className="container mx-auto p-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-sm">
              We are committed to sustainability and innovation, aiming to create a brighter future for our community.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-2">
              <FaFacebook className="cursor-pointer hover:text-blue-600" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaLinkedin className="cursor-pointer hover:text-blue-700" />
              <FaInstagram className="cursor-pointer hover:text-pink-600" />
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-stone-700 dark:border-stone-300 pt-2">
          <p className="text-sm text-center">
            © 2023 Energy Sustainability.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
