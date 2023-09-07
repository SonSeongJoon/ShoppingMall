import React from 'react';

const categories = ['전체', '상의', '하의', '드레스']
export function Category() {

  return (
     <div className='mb-5'>
        <ul className='flex'>
            {categories.map((ca) => <li className='mr-3'>{ca}</li>)}
        </ul>
     </div>
  )
}