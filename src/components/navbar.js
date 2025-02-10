// "use client";
// import Link from 'next/link'
// import { useRouter,usePathname } from 'next/navigation'

// export default function Navbar() {
//     const pathname = usePathname();
//   const router = useRouter()
//   const gradientBackground = `
//     linear-gradient(#15272E, #347C8D)
//   `;
//   return (
//     <nav className="bg-blue-600 p-4 " style={{ background: gradientBackground }}>
//       <div className="container mx-auto flex justify-between">
//         <Link href="/" className={`text-white ml-6 ${pathname === '/' ? 'font-bold text-xl' : ''}`}>
//           Home
//         </Link>
//         <Link href="/about" className={`text-white mr-6 ${pathname === '/about' ? 'font-bold' : ''}`}>
//           About
//         </Link>
//       </div>
//     </nav>
//   )
// }

"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();
  const gradientBackground = "linear-gradient(#00246B, #000000)";

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