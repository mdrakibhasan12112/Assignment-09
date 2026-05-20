'use client';

import React, { useEffect, useState } from 'react';
import CarsCard from './CarsCard';
// import CarsCard from './CarsCard';

const ExploreCarsSearch = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/explore-car?search=${search}&type=${type}`)
      .then(res => res.json())
      .then(data => setCars(data));
  }, [search, type]);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-green-400 text-center mb-5">
        Explore Our Premium Cars
      </h1>
      <p className="text-center items-center mb-4 text-green-400">
        Whether youre looking for a family SUV, a stylish sedan, or a powerful
        pickup truck,<br></br> we make the buying process simple and
        stress-free.
      </p>
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder=" 🔍 Search car..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-3 rounded-xl w-full"
        />

        {/* Filter */}
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className="border p-3 rounded-xl w-full md:w-[220px]"
        >
          <option value="">All Types</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Sports">Sports</option>
          <option value="Electric">Electric</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cars.map(car => (
          <CarsCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default ExploreCarsSearch;
