'use client';
import { useState } from 'react';
import PostCard from './PostCard';
import HashtagFilter from './HashtagFilter';

export default function HomePageContent({ posts }) {
  // Allow multiple selected hashtags (as an array)
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Default hashtags to assign if a post doesn't have any
  const defaultHashtags = ['#AI', '#TechNews', '#Web3', '#Cryptocurrency', '#Science', '#Travel','#Fitness', '#Music'];

  // Augment each post with random hashtags if none are present.
  const augmentedPosts = posts.map(post => {
    let extractedHashtags = post.body.match(/#\w+/g) || [];
    if (extractedHashtags.length === 0) {
      // Randomly assign one or two hashtags from the default list
      const randomHashtags = defaultHashtags
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 3) + 1);
      extractedHashtags = randomHashtags;
      // Optionally, append these hashtags to the post body for display
      post.body = post.body + ' ' + randomHashtags.join(' ');
    }
    return post;
  });

  // Extract unique hashtags from all posts.
  const hashtags = [...new Set(
    augmentedPosts.flatMap(post => post.body.match(/#\w+/g) || [])
  )];

  // Filter posts based on selected hashtags (OR logic)
  const hashtagFilteredPosts = selectedHashtags.length
    ? augmentedPosts.filter(post =>
        selectedHashtags.some(tag => post.body.includes(tag))
      )
    : augmentedPosts;

  // Filter posts based on search query (searching title and body)
  const filteredPosts = hashtagFilteredPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container mx-auto p-4 pb-24">
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
        selectedHashtags={selectedHashtags}
        onToggle={(tag) => {
          // Toggle tag in selectedHashtags
          setSelectedHashtags((prev) =>
            prev.includes(tag)
              ? prev.filter((t) => t !== tag)
              : [...prev, tag]
          );
        }}
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
