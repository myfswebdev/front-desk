// pages/categories.js
import Link from 'next/link';

const categories = [
  { id: 1, name: 'Technology', image: '/images/technology.jpg', description: 'Explore the latest tech trends.' },
  { id: 2, name: 'Travel', image: '/images/travel.jpg', description: 'Discover amazing travel destinations.' },
  { id: 3, name: 'Food', image: '/images/food.jpg', description: 'Delicious recipes and food inspiration.' },
];

export default function Categories() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Categories</h1>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white p-4 rounded shadow">
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">{category.name}</h2>
            <p>{category.description}</p>
            <Link href={`/categories/${category.id}`} className="mt-4 inline-block px-4 py-2 bg-gray-800 text-white rounded">Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
