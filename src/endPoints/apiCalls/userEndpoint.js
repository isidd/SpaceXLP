import { wrappedFetch } from './../apiMethods/apiMethods';
import {ON_PAGE_LOAD } from './../constants';
import {API_URL} from '../config/apiConfig'




export const on_page_data = (query) =>{
  if(!query){
    return wrappedFetch(`${API_URL}${ON_PAGE_LOAD}?limit=100`, 'GET');
  }else{
    return wrappedFetch(`${API_URL}${ON_PAGE_LOAD}?limit=100&${query.split("?")[1]}`, 'GET');
  }
}

