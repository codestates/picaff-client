import axios from 'axios'
import { MapOption, itemResult } from 'interface'

export const RequestAllItem = async (type: 'coffee' | 'product') => {
  const res = await axios.get<itemResult[]>(`http://localhost:4000/item/all?type=${type}`)
  return res.data
}

export const GetMapOptions = (type: string): MapOption => {
  switch (type) {
    case 'All':
      return { zoom: 3, center: { lat: 5, lng: 170.644 } }
    case 'GT':
      return { zoom: 7, center: { lat: 15.555556, lng: -90.334815 } }
    case 'KE':
      return { zoom: 6, center: { lat: 0.268061, lng: 37.0798023 } }
    case 'CO':
      return { zoom: 6, center: { lat: 4.308886, lng: -73.100973 } }
    case 'ET':
      return { zoom: 6, center: { lat: 9.10802, lng: 39.710975 } }
    case 'BR':
      return { zoom: 5, center: { lat: -8.097442, lng: -58.317086 } }
    default:
      return { zoom: 3, center: { lat: 5, lng: 170.644 } }
  }
}
