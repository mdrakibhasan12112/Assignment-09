import CarsCard from '@/components/CarsCard';
import ExploreCarsSearch from '@/components/ExploreCarsSearch';
import React from 'react';



const ExploreCarPage = () => {
  //  const res = await fetch('http://localhost:8080/explore-car');
  //  const cars = await res.json()
  //  console.log(cars);

  return (
    <div className="mt-12">
      <ExploreCarsSearch></ExploreCarsSearch>

    </div>
  );
};

export default ExploreCarPage;