import axios from 'axios'
import { IArticle } from '../../types'

const get = async (): Promise<IArticle[] | []> => {
  try {
    const response = await axios.get('https://5eed24da4cbc340016330f0d.mockapi.io/api/articles')
    return response.data
  } catch (e) {
    console.log(e)
    return []
  }
}

export { get }