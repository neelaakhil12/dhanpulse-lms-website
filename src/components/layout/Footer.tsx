import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-auto border-t border-brand-navy-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <Image 
                src="/logo.png" 
                alt="DhanPulse Logo" 
                width={320} 
                height={90} 
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-sm opacity-90 mb-4 pr-4">
              SEBI-Registered Advisory | Research-Driven Trading Systems.
              Guiding Indian traders to achieve consistency in the stock market.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gold-highlight transition-colors"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-gold-highlight transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-gold-highlight transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-gold-highlight transition-colors"><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-highlight">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/" className="hover:text-gold-highlight hover:underline">Home</Link></li>
              <li><Link href="/courses" className="hover:text-gold-highlight hover:underline">All Courses</Link></li>
              <li><Link href="/about" className="hover:text-gold-highlight hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gold-highlight hover:underline">Contact Support</Link></li>
              <li><Link href="/login" className="hover:text-gold-highlight hover:underline">Member Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-highlight">Legal</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/legal/terms" className="hover:text-gold-highlight hover:underline">Terms & Conditions</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-gold-highlight hover:underline">Privacy Policy</Link></li>
              <li><Link href="/legal/refunds" className="hover:text-gold-highlight hover:underline">Refund Policy</Link></li>
              <li><Link href="/legal/disclaimer" className="hover:text-gold-highlight hover:underline">SEBI Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-highlight">Contact</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="mailto:support@dhanpulse.co.in" className="hover:text-gold-highlight">support@dhanpulse.co.in</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:+910000000000" className="hover:text-gold-highlight">+91 0000000000</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-xs opacity-75">
          <p className="mb-2 italic">
            Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
          </p>
          <p>&copy; {new Date().getFullYear()} DhanPulse by Ajay Rao Devoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
