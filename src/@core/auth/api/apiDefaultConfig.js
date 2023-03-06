// ** Auth Endpoints
// console.log(process.env.NODE_ENV)
export default {
  // baseURL : 'http://apisandbox.nubiot.local/',
  baseURL : process.env.NODE_ENV === 'production' ? 'https://api.nubiot.io/v1/' : process.env.REACT_APP_PUBLIC_URL
  // baseURL : `${process.env.REACT_APP_API_REST_URL}`,
  
}
