import Switch from '@/components/Switch/Switch';
import React from 'react';

const App = () => {
  return (
    <div className="h-screen mx-auto my-0 w-4/5 flex justify-center">
      <div className="w-2/4 flex flex-col gap-1 justify-start">
        <Switch variant='contract' />
      </div>
    </div>
  );
};

export default App;
