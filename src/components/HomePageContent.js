'use client';

import { useState } from 'react';
import PostCard from './PostCard';
import HashtagFilter from './HashtagFilter';

export default function HomePageContent({ posts }) {
  const [selectedHashtag, setSelectedHashtag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract hashtags from posts
  const hashtags = [...new Set(
    posts.flatMap(post => post.body.match(/#\w+/g) || [])
  )];

  // Filter posts based on hashtag selection
  const hashtagFilteredPosts = selectedHashtag 
    ? posts.filter(post => post.body.includes(selectedHashtag))
    : posts;

  // Filter posts based on search query
  const filteredPosts = hashtagFilteredPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container mx-auto p-4">
      {/* Heading and Search Bar Container */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <input 
          type="text" 
          placeholder="Search blogs..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/3"
        />
      </div>

      {/* Hashtag Filter */}
      <HashtagFilter 
        hashtags={hashtags} 
        selectedHashtag={selectedHashtag} 
        onSelect={setSelectedHashtag}
      />
      
      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
