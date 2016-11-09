/**
 * Created by Jeffrey on 10/24/2016.
 */


import React, { Component, PropTypes } from 'react'

//importing each element of the page
import Cards from './cards'
import Profile from './profile'
import Search from './search'
import Nav from './nav'




export const Main = () => (
    <div>
        <Nav />
        <div className="row">
            <div className="col-md-3">
                <Profile />
            </div>
            <div className="col-md-9">
                <Search />
                <Cards />
            </div>
        </div>
    </div>
)

export default Main


