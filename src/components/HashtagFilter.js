"use client";
export default function HashtagFilter({ hashtags, selectedHashtag, onSelect }) {
    return (
      <div className="mb-4 flex flex-wrap gap-2">
        {hashtags.map(hashtag => (
          <button
            key={hashtag}
            onClick={() => onSelect(hashtag === selectedHashtag ? null : hashtag)}
            className={`px-3 py-1 rounded-full text-sm ${
              hashtag === selectedHashtag 
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {hashtag}
          </button>
        ))}
      </div>
    )
  }