import axios from 'axios'

const fetchClient = () => {
  let instance = axios.create({
    validateStatus: function (status) {
        return (status >= 200 && status <= 204) || status === 401 || status === 400 || status === 409;
    },
})


  instance.interceptors.response.use((response) => {
    try{
      console.log('response in axios config', response)
      return response
    }catch(err){
      console.log('error in axios config', err )
    }
  })

  return instance
}

export default fetchClient()