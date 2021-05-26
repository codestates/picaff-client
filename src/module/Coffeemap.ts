import axios from 'axios'
import { TestResult } from 'interface'

export const RequestAllItem = async (type: 'coffee' | 'product') => {
  const res = await axios.get<TestResult[]>(`http://localhost:4000/item/all?type=${type}`)
  return res.data
}
