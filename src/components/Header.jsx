import React from 'react';
import {Link} from "react-router-dom";

export function Header() {

    return (
        <div className='flex items-center justify-between mb-5 border-b border-b-black p-4'>
            <Link to='/' className='flex items-center'>
                <h1 className='text-4xl text-blue-600'>Shoppy</h1>
            </Link>
            <nav className='flex items-center gap-4 font-semibold'>
                <Link to='/clothes'>Clothes</Link>
                <Link to='/carts'>Carts</Link>
                <Link to='/clothes/new'>ADD</Link>
                <button>Login</button>
            </nav>

        </div>
    )
}