import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'

const list = [
    { name: 'start', path: '/', exact: true },
    { name: 'Produkty', path: '/products' },
    { name: 'Kontakt', path: '/contact' },
    { name: 'Panel admin', path: '/admin' }
]

const Navigation = () => {

    const menu = list.map(item => (
        <li><NavLink
            key={item.name}
            to={item.path}
            exact={item.exact}
        >{item.name}</NavLink>
        </li>
    ))

    return (

        <nav className='main'>
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;