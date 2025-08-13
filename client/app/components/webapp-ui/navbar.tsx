'use client';
import * as React from 'react';


const NavbarComponent: React.FC =() => {
    return (
        <nav className='w-screen' style={{height: '40px', 'backgroundColor':'#212121', display: 'flex', alignItems: 'center', padding: '0 20px' , position:'fixed', borderBottom:'2px solid black' , zIndex: 1000}}>
            <span style={{color: 'white'}}>Nexlink-io</span>
        </nav>
    )
}

export default NavbarComponent;