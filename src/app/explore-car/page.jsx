import CarsCard from '@/components/CarsCard';
import { fetchExploreCars } from '@/lib/cars/data';
import React from 'react';



const ExploreCarPage =async () => {
 const cars = await fetchExploreCars()
 console.log(cars);
 return (
   <div className='mt-12'>
     <div className='max-w-7xl mx-auto'>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {cars.map(car => (
           <CarsCard key={car._id} car={car}></CarsCard>
         ))}
       </div>
     </div>
   </div>
 );
};

export default ExploreCarPage;