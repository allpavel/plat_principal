import React from 'react';
import Head from '../Head/Head';
import '../../assets/css/normalize.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Head />
            {children}
        </div>
    )
}

export default Layout;