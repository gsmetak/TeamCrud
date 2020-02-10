import axios from 'axios'
import CustomError from '../../components/errors/CustomError'

const agent = axios.create({
  baseURL: 'BASE_API_URL',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

const send = ({ method, url, data }) => {
  return agent
    .request({
      method,
      url,
      data,
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx.
        if (error.response.data.error) {
          throw new CustomError(undefined, error.response.data.error.message)
        }
        throw new CustomError(error.response.data.message, error.response.data.detail)
      }
      if (error.request) {
        // The request was made but no response was received.
        throw new Error('Oops! Something went wrong.')
      } else {
        // Something happened while setting up the request.
        throw new Error('Oops! Something went wrong.')
      }
    })
}

export default send
