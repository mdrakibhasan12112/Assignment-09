import CarsCard from '@/components/CarsCard';
import ExploreCarsSearch from '@/components/ExploreCarsSearch';
import React from 'react';



const ExploreCarPage = () => {
//  const res = await fetch('http://localhost:8080/explore-car');
//  const cars = await res.json()
//  console.log(cars);

 return (
   <div className='mt-12'>
     
     <ExploreCarsSearch></ExploreCarsSearch>
     
     {/* <div className='max-w-7xl mx-auto'>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {cars.map(car => (
           <CarsCard key={car._id} car={car}></CarsCard>
         ))}
       </div>
     </div> */}
   </div>
 );
};

export default ExploreCarPage;