import React from 'react';
import Newproduct from './Newproduct';
import Productlist from './Productlist';
import User from './User';

const Main = () => (
    <div className="container">
        <div className="row">
            <Newproduct />
            <Productlist />
        </div>
        <div className="row">
            <User />
        </div>
    </div>
)

export default Main;