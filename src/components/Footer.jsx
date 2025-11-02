import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Visit Ashapura Jewellers</h3>
            <p className="mt-3 text-white/70 max-w-md">
              Authentic gold and silver with hallmark assurance. Walk in for personalized guidance and custom orders.
            </p>
            <div className="mt-6 space-y-3 text-white/85">
              <p className="flex items-center gap-3"><Phone className="h-4 w-4" /> +91 00000 00000</p>
              <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> hello@ashapurajewellers.com</p>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Main Bazaar Road, Your City</p>
            </div>
          </div>

          <div id="visit" className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <iframe
              title="Store Location"
              className="w-full h-64 sm:h-72 md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31527.690983511755!2d72.571!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f4bdb5a3e1%3A0x18a6d69ef5cb3c3e!2sJewellery%20Market!5e0!3m2!1sen!2sin!4v1680000000000">
            </iframe>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Ashapura Jewellers. All rights reserved.</p>
          <p>Crafted with care — Pure. Elegant. Timeless.</p>
        </div>
      </div>
    </footer>
  );
}
