'use client';
import React from 'react';

export default function HashtagFilter({ hashtags, selectedHashtags, onToggle }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {hashtags.map((hashtag) => {
        const isSelected = selectedHashtags.includes(hashtag);
        return (
          <button
            key={hashtag}
            onClick={() => onToggle(hashtag)}
            className={`px-3 py-1 rounded-full text-sm border flex items-center gap-1 transition-colors duration-200 ${
              isSelected
                ? 'bg-blue-600 text-white border-[#00246B]'
                : 'bg-gray-200 text-gray-700 border-gray-300'
            }`}
          >
            {hashtag}
            {isSelected && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(hashtag);
                }}
                className="ml-1 text-xs font-bold"
              >
                ×
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
