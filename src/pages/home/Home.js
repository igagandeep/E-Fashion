import React from 'react';
import './Home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Products from '../../components/products/Products';

function Home({sidebar}) {
    console.log(sidebar);
    return (
        <div className='home-container'>
            <Sidebar/>
            <Products />
        </div>
    )
}
export default Home
