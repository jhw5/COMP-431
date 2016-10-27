import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Landing from './components/auth/landing'
import Main from './components/main/main'
import Profile from './components/profile/profile'

// export const App = () => (
// <div>
//     <Profile />
// </div>
// )
//
// export default connect() (App)



export const App = ({location}) => {
    let page
    if (location=='PROFILE') {
        page = <Profile />
    }
    else if (location=='MAIN') {
        page = <Main />
    }
    else {
        page = <Landing />
    }
    return (
        <div>
            {page}
        </div>
    )
}

App.propTypes = {
    location: PropTypes.string.isRequired,
}

export default connect(
    (state) => {
        return {
            location: state.general.location
        }
    }
)(App)

