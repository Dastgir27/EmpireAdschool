import React from "react";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";


export default function Footer() {
  return (
    <footer className="bg-[#2C2A26] text-[#D9CDC4] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-[#A67C52]">About Us</h2>
            <p className="mt-2 text-[#B9A48A] text-sm">
              MasterCamp Academy provides world-class education and career-transforming courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-[#A67C52]">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-[#B9A48A]">
              <li><a href="#" className="hover:text-[#A67C52] transition">Courses</a></li>
              <li><a href="#" className="hover:text-[#A67C52] transition">Admissions</a></li>
              <li><a href="#" className="hover:text-[#A67C52] transition">Scholarships</a></li>
              <li><a href="#" className="hover:text-[#A67C52] transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-[#A67C52]">Contact Us</h2>
            <p className="mt-2 text-[#B9A48A] text-sm leading-relaxed">
              📍 123 Academy Street, NY, USA <br />
              📧 info@mastercamp.com <br />
              📞 +1 234 567 890
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-xl font-bold text-[#A67C52]">Subscribe to Newsletter</h2>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-[#D9CDC4] text-[#2C2A26] rounded-l-md focus:outline-none"
              />
              <button className="px-4 py-2 bg-[#A67C52] text-white rounded-r-md hover:bg-[#8B5E3C] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-10">
  <p className="text-[#B9A48A] mb-3">Follow us on</p>
  <div className="flex justify-center space-x-4">
    <a href="#" className="text-[#D9CDC4] hover:text-[#A67C52] transition text-2xl">
      <Facebook fontSize="inherit" />
    </a>
    <a href="#" className="text-[#D9CDC4] hover:text-[#A67C52] transition text-2xl">
      <Twitter fontSize="inherit" />
    </a>
    <a href="#" className="text-[#D9CDC4] hover:text-[#A67C52] transition text-2xl">
      <Instagram fontSize="inherit" />
    </a>
    <a href="#" className="text-[#D9CDC4] hover:text-[#A67C52] transition text-2xl">
      <LinkedIn fontSize="inherit" />
    </a>
  </div>
</div>

        {/* Copyright */}
        <div className="border-t border-[#444] text-center mt-8 pt-4">
          <p className="text-sm text-[#B9A48A]">
            © {new Date().getFullYear()} MasterCamp Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
