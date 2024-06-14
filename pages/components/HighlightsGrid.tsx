// components/HighlightsGrid.tsx

import React from 'react';
import Link from 'next/link';

interface Highlight {
  name: string;
  image: string;
  description: string;
}

interface HighlightsGridProps {
  highlights: Highlight[];
}

const HighlightsGrid: React.FC<HighlightsGridProps> = ({ highlights }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {highlights.map((highlight, index) => (
        <div key={index} className="border border-gray-300 p-4 rounded">
          <img src={highlight.image} alt={highlight.name} className="w-full h-32 object-cover mb-4" />
          <h2 className="text-xl font-bold">{highlight.name}</h2>
          <p>{highlight.description}</p>
          <Link href={`/categories/${highlight.name.toLowerCase()}`} className="text-blue-500 mt-4">Explore
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HighlightsGrid;
