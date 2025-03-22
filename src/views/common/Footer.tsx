export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-[#FF4B00]">About Us</h2>
            <p className="mt-2 text-[#D9CDC4] text-sm">
              Empire Ads School provides world-class education and career-transforming courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
  <h2 className="text-xl font-bold text-[#FF4B00]">Courses</h2>
  <ul className="mt-2 space-y-2 text-[#D9CDC4]">
  <li>
      <a href="/design-mastery" className="hover:text-[#FF4B00] transition">
        Design Mastery Program
      </a>
    </li>
    <li>
      <a href="/creative-thinking" className="hover:text-[#FF4B00] transition">
        Visualise - Creative Thinking
      </a>
    </li>
    <li>
      <a href="/complete-creative-mastery" className="hover:text-[#FF4B00] transition">
        Complete Creative Mastery
      </a>
    </li>
  </ul>
</div>



          {/* Contact Info */}
          <div>
  <h2 className="text-xl font-bold text-[#FF4B00]">Contact Us</h2>
  <p className="mt-2 text-[#D9CDC4] text-sm leading-relaxed">
    📍 C Wing, Trade World, Kamla Mills Compound, 913-914, Lower Parel, Mumbai, Maharashtra 400013 <br />
    📞 <a href="tel:+917715028073" className="text-[#FF4B00] font-medium hover:underline">
      +91 77150 28073
    </a>
  </p>
</div>


          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-xl font-bold text-[#FF4B00]">Subscribe to Newsletter</h2>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-[#333] text-white rounded-l-md focus:outline-none"
              />
              <button className="px-4 py-2 bg-[#FF4B00] text-white rounded-r-md hover:bg-[#D93D00] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#444] flex flex-col md:flex-row justify-between items-center mt-8 pt-4 text-center md:text-left">
  {/* Left Side: Copyright */}
  <p className="text-sm text-[#D9CDC4]">
    © {new Date().getFullYear()} <a href="https://theempiremedia.in/" className="hover:text-[#FF4B00]">Empire Media</a>. All rights reserved.
  </p>

  {/* Right Side: Placement Policy Link */}
  <a href="/placement-policy" className="text-sm text-[#D9CDC4] hover:text-[#FF4B00] mt-2 md:mt-0">
    Placement Policy
  </a>
</div>

      </div>
    </footer>
  );
}
