"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();
  const gradientBackground = "linear-gradient(#00246B, #021819)";

  return (
    <nav className="relative h-20 p-7 overflow-hidden shadow-sm shadow-[#101820]" style={{ background: gradientBackground }}>
      {/* <FireworksAnimation /> */}
      <div className="container mx-auto flex justify-between relative z-10">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            href="/" 
            className={`text-white text-xl ml-4 ${pathname === '/' ? 'font-bold text-xl' : ''}`}
          >
            <motion.span
              className="inline-block"
              whileHover={{ 
                textShadow: "0 0 8px rgba(34, 211, 238, 0.8)",
                scale: 1.1 
              }}
            >
              Home
            </motion.span>
          </Link>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            href="/about" 
            className={`text-white text-xl mr-4 ${pathname === '/about' ? 'font-bold text-xl' : ''}`}
          >
            <motion.span
              className="inline-block"
              whileHover={{ 
                textShadow: "0 0 8px rgba(34, 211, 238, 0.8)",
                scale: 1.1 
              }}
            >
              About
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}