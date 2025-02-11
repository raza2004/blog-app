'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PostCard({ post }) {
  // Extract hashtags from post body
  const assignedHashtags = post.body.match(/#\w+/g) || [];

  return (
    <motion.div 
      className="bg-white rounded-lg mt-3 border border-gray-200 shadow-md p-4 transition-shadow"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-xl font-bold mb-2">
        <Link href={`/post/${post.id}`} className="text-[#00246B] hover:text-blue-600">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-4">
        {post.body.substring(0, 100)}...
      </p>
      <Link 
        href={`/post/${post.id}`}
        className="text-blue-500 hover:text-blue-700 font-medium"
      >
        Read More →
      </Link>
      {/* Display assigned hashtags below the Read More link */}
      <div className="mt-3 flex flex-wrap gap-2">
        {assignedHashtags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-gray-200 text-gray-500 rounded-full px-2 py-1 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
