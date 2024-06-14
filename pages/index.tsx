// pages/index.tsx

import React from 'react';
import Link from 'next/link';
import Layout from './components/Layout';
import HighlightsGrid from './components/HighlightsGrid';

const HomePage: React.FC = () => {
  const highlights = [
    {
      name: 'Surfing',
      image: '/images/surfing.jpg',
      description: 'Enjoy the thrill of riding the waves.',
    },
    {
      name: 'Adventure',
      image: '/images/adventure.jpg',
      description: 'Embark on thrilling adventures in the wilderness.',
    },
    {
      name: 'Sightseeing',
      image: '/images/sightseeing.jpg',
      description: 'Explore breathtaking sights and landmarks.',
    },
  ];

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url("/images/background.jpg")',width: "90%",
    height:"30%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "container"
 }}>
    <Layout>
      <div className="bg-cover bg-center bg-hero-image">
        <h1 className="text-6xl text-white font-bold">Welcome to the Travel Blog!</h1>
      </div>
      <HighlightsGrid highlights={highlights} />
    </Layout>
    </div>
  );
};

export default HomePage;
