import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
}

const Products = async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=6');
  const products: Product[] = await response.json();

  const renderProductSection = (title: string) => (
    <div className="w-full p-4">
      <p className="font-bold text-2xl mb-4 text-sky-500">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border-2 p-4 drop-shadow-lg flex flex-col items-center bg-gray-100 cursor-pointer hover:bg-sky-400 hover:text-white group"
          >
            <div className="font-semibold text-center group-hover:text-white">{item.title}</div>
            <div className="text-sm text-gray-600 text-center group-hover:text-white">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      {/* Filter Sidebar */}
      <div className="bg-gray-300 w-full lg:w-1/4 rounded-lg p-4 flex flex-col items-center gap-4">
        <p className="font-bold text-2xl border-b-2 w-full text-center">Filter</p>
        <form className="flex flex-col items-start gap-2 w-full">
          {['new products', 'Recommended', 'etc', 'Brands'].map((label, index) => {
            const id = label.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={id}
                  className="form-checkbox h-4 w-4 text-sky-600"
                />
                <label htmlFor={id} className="text-gray-700 capitalize">
                  {label}
                </label>
              </div>
            );
          })}
        </form>
      </div>

      {/* Products Content */}
      <div className="flex flex-col gap-6 w-full">
        {renderProductSection('New Products')}
        {renderProductSection('Recommended')}
        {renderProductSection('Etc')}
        {renderProductSection('Brands')}
      </div>
    </div>
  );
};

export default Products;
