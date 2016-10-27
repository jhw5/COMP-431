/**
 * Created by Jeffrey on 10/24/2016.
 */
import React from 'React'
import { connect } from 'react-redux'


export const Registration = () => (
    <div>
        <h1>Register</h1>
        <form>
            <p>Account Name</p>
            <input></input>

            <p>Display Name</p>
            <input></input>

            <p>Email Address</p>
            <input></input>

            <p>Phone Number 123-123-1234</p>
            <input></input>

            <p>Zip Code </p>
            <input></input>

            <p>Date of Birth </p>
            <input></input>

            <p>Password </p>
            <input></input>

            <p>Confirm Password </p>
            <input></input>
            
            <div>
                <input type="button" value="Register" />
            </div>
        </form>
    </div>
)

export default connect() (Registration)

