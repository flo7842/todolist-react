import React, { Fragment, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Layout = (props) => {

    return (
        <Fragment>
            <Header />
            {props.children}
            <Footer />
        </Fragment>
    );
};

export default Layout;