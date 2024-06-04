import React from 'react';
import './index.css';

function App() {
  return (
  
    <div className="flex flex-wrap m-5">
      <div className="flex flex-col items-center w-full sm:w-2/5">
        <img src='/src/assets/3L.png' alt="Thumbnail 0" className="w-full max-w-md mb-2" />
        <div className="flex flex-wrap gap-2">
          <img src='/src/assets/1L.png' alt="Thumbnail 1" className="w-16 h-16" />
          <img src='/src/assets/2L.png'alt="Thumbnail 2" className="w-16 h-16" />
          <img src='/src/assets/3L.png' alt="Thumbnail 3" className="w-16 h-16" />
          <img src='/src/assets/3L.png' alt="Thumbnail 4" className="w-16 h-16" />
        </div>
      </div>
      <div className="w-full sm:w-3/5 p-5">
        <h1 className="text-2xl font-bold">House</h1>
        <p>1 pcs</p>
        <p>MRP: <span className="line-through">$20</span> Price: <span className="font-bold">$2000</span></p>
        <p>You Save: 5% Inclusive of all taxes</p>
        <p className="text-green-500">In Stock</p>
        <p>Sold by <a href="#" className="text-blue-500">Kaaftoon online</a></p>
      </div>
    </div>
  );
}

export default App;
