
import Action from './actions'
import { combineReducers } from 'redux'


function general(state = {location:''}, action) {
	switch (action.type) {
		case Action.NAV_PROFILE:
			return {...state, location: 'PROFILE'}
		case Action.NAV_MAIN:
			return {...state, location: 'MAIN'}
		case Action.NAV_LANDING:
			return {...state, location: 'LANDING'}
		default:
			return {...state}
	}
}

 
function profile(state = {username:'', email:'', headline:'', avatar:'', zipcode:''}, action) {
	switch (action.type) {
		case Action.UPDATE_PROFILE:
			if (action.headline) {
				return {...state, headline : action.headline}
			}
			if (action.email) {
				return {...state, email : action.email}
			}
			if (action.zipcode) {
				return {...state, zipcode : action.zipcode}
			}
			if (action.avatar) {
				return {...state, avatar : action.avatar}
			}

		case Action.UPDATE_HEADLINE:
			return {...state, headline : action.headline}

		case Action.LOCAL_LOGIN:
			return {...state,
				username : action.username,
				headline : action.headline
			}
		default:
			return state
	}
}

const Reducer = combineReducers({
	general, profile
})


export default Reducer

