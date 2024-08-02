import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
    return (
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/personal">Personal</NavLink>
        </nav>
    );
};

export default Tabs;
