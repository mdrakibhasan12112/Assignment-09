import React from 'react';
import { Spinner } from '@heroui/react';


const Loading = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="flex items-center gap-4">
        <Spinner size='lg' />
      </div>
    </div>
  );
};

export default Loading;
