/**
 * Created by Jeffrey on 10/24/2016.
 */


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { update_headline } from '../../actions'

class Profile extends Component {
    render() {
        return (
            <div>
                <div className = "text-center">
                    <h4>Welcome</h4>
                    <h5>{this.props.username}</h5>
                </div>
                <div className = "text-center">
                    <img className="col-md-12" src={this.props.avatar} />
                    <div><h2>{this.props.headline}</h2></div>

                    <input type="text" placeholder="Update Status..."
                           ref={(data) => {this.nextStatus = data}} />

                    <input type="button" value="Update" onClick={ () => {
                    this.props.dispatch(update_headline(this.nextStatus.value))
                    this.nextStatus.value = ''
                    }} />
                </div>

            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            username : state.profile.username,
            headline : state.profile.headline,
            avatar : state.profile.avatar
        }
    }
)(Profile)
