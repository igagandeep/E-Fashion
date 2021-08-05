import React from 'react';
import './Home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Products from '../../components/products/Products';

function Home({sidebar}) {
    return (
        <div className='home-container'>
            <Sidebar sidebar={sidebar}/>
            <Products />
        </div>
    )
}
export default Home
