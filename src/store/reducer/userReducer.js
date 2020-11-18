import {
    NETWORK_REQUEST,
    ON_PAGE_SUCCESS,
    NETWORK_REQUEST_ERROR


    } from '../action/types/actionTypes'

import {updateState} from './../../helper/updateStateHelper' 


let initialState = {
   data:'',
   isLoading : false,
   errorMsg : ""
}


export const user = ( state=initialState , action)=>{
        switch(action.type){
            
            case NETWORK_REQUEST :
                return updateState(state ,{
                    isLoading : true
                })


            case ON_PAGE_SUCCESS :
                return updateState(state ,{
                    data : action.value,
                    isLoading : false
                })
                
            case NETWORK_REQUEST_ERROR :
                return updateState(state ,{
                    isLoading : false,
                    errorMsg : "Request Error"
                })

                default :
                    return updateState(state,{})

        }

}