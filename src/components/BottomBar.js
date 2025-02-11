"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function BottomBar() {
  const pathname = usePathname();
  const gradientBackground = "linear-gradient(#00246B, #021819)";

  return (
    <nav className="absolute bottom-0 w-full p-5 overflow-hidden shadow-sm shadow-[#101820]" style={{ background: gradientBackground }}>
      {/* <FireworksAnimation /> */}
      <div className="container flex justify-center items-center text-center relative z-10">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            href="/" 
            className={`text-white text-xl ml-4 ${pathname === '/' ? 'font-semibold text-lg' : ''}`}
          >
            <motion.span
              className="inline-block"
              whileHover={{ 
                textShadow: "0 0 8px rgba(34, 211, 238, 0.8)",
                scale: 1.1 
              }}
            >
              All Rights Reserved
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}