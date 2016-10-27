/**
 * Created by Jeffrey on 10/24/2016.
 */

export const url =  'https://webdev-dummy.herokuapp.com';

const Action = {
    NAV_PROFILE : 'NAV_PROFILE',
    NAV_MAIN : 'NAV_MAIN',
    NAV_LANDING : 'NAV_LANDING',
    UPDATE_HEADLINE : 'UPDATE_HEADLINE',
    UPDATE_PROFILE : 'UPDATE_PROFILE',
    LOCAL_LOGIN : 'LOCAL_LOGIN',

}
export default Action

const resource = (method, endpoint, payload) => {
    const options =  {
        method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (payload) options.body = JSON.stringify(payload)

    return fetch(`${url}/${endpoint}`, options)
        .then(r => {
            if (r.status === 200) {
                return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
            } else {
                // useful for debugging, but remove in production
                console.error(`${method} ${endpoint} ${r.statusText}`)
                throw new Error(r.statusText)
            }
        })
}


export function local_login(username, password) {
    return (dispatch) => resource('POST', 'login', {username , password})
        .then(r => {
            dispatch({
                type : Action.LOCAL_LOGIN,
                username : r.username
            })
            dispatch(currentState())
        })
}

export function logout() {
    return (dispatch) => {
        resource('PUT', 'logout')
            .then(r => {
                dispatch({type : Action.NAV_LANDING})
            }
        )
    }
}


export function update_profile ({zipcode, email, password, passconf}) {
    return (dispatch) => {
        dispatch (update_values('zipcode', zipcode))
        dispatch (update_values('email', email))
        dispatch (update_values('password', password))
        dispatch (update_values('passconf', passconf))

    }
}
export function update_headline(headline) {
    return (dispatch) => {
        dispatch (update_values('headline', headline))
    }
}

export function update_values (key, value) {
    return (dispatch) => {
        if (value) {
            const payload = {}
            payload[key] = value
            resource('PUT', key, payload).then((r) => {
                const action = {type : Action.UPDATE_PROFILE}
                action[key] = r[key]
                dispatch(action)
            })
        }
    }
}


export function get_profile() {
    return (dispatch) => {
        dispatch(get_values('avatars'))
        dispatch(get_values('zipcode'))
        dispatch(get_values('email'))
    }
}

export function get_values(key) {
    return (dispatch) => {
        resource('GET', key).then(r =>{
            const action = {type : Action.UPDATE_PROFILE}
            switch (key) {
                case 'avatars' :
                    action.avatar = r.avatars[0].avatar;
                case 'zipcode' :
                    action.zipcode = r.zipcode;
                case 'email' :
                    action.email = r.email; 
            } dispatch(action)
        })
    }
}

export function currentState() {
    return (dispatch) => {
        resource('GET', 'headlines').then((r) => {
            dispatch({
                type : Action.UPDATE_HEADLINE,
                headline : r.headlines[0].headline,
            })
            dispatch({type : Action.NAV_MAIN})
            dispatch(get_profile())
        })
    }
}

