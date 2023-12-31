import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';

export function ProductsDetail() {
  const {
    state: {
      product: { image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    // 여기서 장바구니에 추가하면 됨.
  };
  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">{category}</p>
      <section className="flex flex-col md:flex-row">
        <img className="w-full px-4 basis-3/12" src={image} alt={title} />
        <div className="w-full basis-9/12 flex flex-col p-4">
          <h2 className="text-3xl font-bold py-2">{title}</h2>
          <p className="text-2xl font-bold border-b border-gray-400">{price}</p>
          <p className="py-4 text-lg">{description}</p>
          <div className="flex items-center">
            <label className="text-blue-950 font-bold" htmlFor="select">
              옵션:
            </label>
            <select
              id="select"
              className="p-2 m-4 flex-1 border-2 border-dashed border-blue-950"
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button text="장바구니에 추가" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}