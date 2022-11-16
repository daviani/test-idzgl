import md5 from 'md5'
import { marvelURL, characters, privateKey, publicKey } from './global'
import axios from 'axios'

const ts = new Date().getTime()
const stringToHash = ts + privateKey + publicKey
const hash = md5(stringToHash)

export const getAllcharacters = () => {
  return axios.get(
    `${marvelURL}${characters}?limit=10&ts=${ts}&apikey=${publicKey}&hash=${hash}`,
  )
}


export const getLoadMoreCharacters = (offset) => {
  return axios.get(
    `${marvelURL}${characters}?limit=10&offset=${offset}&ts=${ts}&apikey=${publicKey}&hash=${hash}`,
  )
}

