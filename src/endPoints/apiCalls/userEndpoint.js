import { wrappedFetch, wrappedGet } from './../apiMethods/apiMethods';
import {ON_PAGE_LOAD } from './../constants';
import {API_URL} from '../config/apiConfig'




export const on_page_data = (url) =>{
  return wrappedFetch(`${API_URL}${ON_PAGE_LOAD}?limit=100${url}`, 'GET');
}

