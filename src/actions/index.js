import {CHANGE_AUTH} from './types';

export function authentication(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}