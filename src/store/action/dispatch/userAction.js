import {on_page_data} from './../../../endPoints/apiCalls/userEndpoint';

import {
    NETWORK_REQUEST,ON_PAGE_SUCCESS,NETWORK_REQUEST_ERROR
} from './../types/actionTypes';




export function NetworkRequest() {
    return {
        type: NETWORK_REQUEST,
    }
}


export function ResponseSuccess(data) {
    return {
        type: ON_PAGE_SUCCESS,
        value: data
    }
}


export function LoginError(errMsg) {
    return {
        type: NETWORK_REQUEST_ERROR,
        value: errMsg
    }
}




export function onPageData(url) {
    return dispatch => {
        dispatch(NetworkRequest());
        return on_page_data(url).then((res) => {
            if (res.status === 200) {
                let { data } = res;
                if (data) return dispatch(ResponseSuccess(data));
                else return dispatch(LoginError(data.message));
            } else if (res.status === 401 || res.status === 400) {
                return dispatch(LoginError(res.data.message));
            }
            
        }).catch((err) => {

            if (err.message) return dispatch(LoginError(err.message));
            else return dispatch(LoginError(err));
        })
    }

}

