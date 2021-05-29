import axios from 'axios'
import { itemResult } from 'interface'

export const getitemResult = async (score: (number | null)[]): Promise<itemResult> => {
  const res = await axios.post<itemResult>('http://localhost:4000/test', score, {
    headers: { 'Content-Type': 'application/json' },
    // token 보내줘야함
  })
  return res.data
}
