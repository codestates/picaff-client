export const ConvertLatLng = <T>(coord: T) => {
  let MulticountryCoords: google.maps.LatLng[][] = []
  let countryCoords: google.maps.LatLng[] = []

  if ('multi' in coord) {
    for (let el of coord['xml']['Polygon']) {
      let tempCountryCoords = []
      const co: string[] = el['outerBoundaryIs']['LinearRing']['coordinates'].split(' ')
      for (let latlng of co) {
        const ca = latlng.split(',')
        tempCountryCoords.push(new window.google.maps.LatLng(Number(ca[1]), Number(ca[0])))
      }
      MulticountryCoords.push(tempCountryCoords)
    }
    return MulticountryCoords
  } else {
    console.log('here', coord)
    const co: string[] = coord['xml']['outerBoundaryIs']['LinearRing']['coordinates'].split(' ')
    for (let latlng of co) {
      const ca = latlng.split(',')
      countryCoords.push(new google.maps.LatLng(Number(ca[1]), Number(ca[0])))
    }
    return countryCoords
  }
}
