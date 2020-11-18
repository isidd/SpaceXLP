import axios from './../config/axiosConfig';

export async function wrappedFetch(input, method, body, headers) {
  console.log('input, method, body', input, method, body,headers);
  let config = {
    method: method,
    url: input,
    data:body
  }  
  if(headers) config.authrization = headers
    return await axios(config)
  }
  
  export async function wrappedGet(resource, method) {
    console.log(resource,method)
    return await axios({
      method: method,
      url: resource
    })
  }
  