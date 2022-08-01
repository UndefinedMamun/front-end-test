import React from 'react'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <main className='bg-gray-50'>
            <Outlet />
        </main>
    )
}

export default MainLayout;