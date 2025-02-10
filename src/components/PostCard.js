"use client";
import Link from 'next/link'

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
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
    </div>
  )
}