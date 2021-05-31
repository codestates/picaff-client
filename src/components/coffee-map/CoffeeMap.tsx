import { GoogleMap, LoadScript, OverlayView, Polygon } from '@react-google-maps/api'
import { MapOption } from 'interface'
import { GetMapOptions } from 'module/Coffeemap'
import { ConvertLatLng } from 'module/Polygon'
import { useEffect, useState } from 'react'
import { CoffeeMapContainer } from './CoffeeMap.style'
import { default as coord } from './polygon.json'

type maptype = {
  type: 'KE' | 'GT' | 'CO' | 'ET' | 'BR' | 'All'
  handleRegionClick?: (Region: string) => void
}

export default function CoffeeMap({ type, handleRegionClick }: maptype) {
  const [PolygonData, setPolygonData] =
    useState<(google.maps.LatLng[] | google.maps.LatLng[][])[] | undefined>(undefined)
  const [index, setindex] = useState<number>(0)
  const [RegionArr, setRegionArr] = useState<string[]>([])
  const [mapOption, setMapOption] = useState<MapOption>({
    zoom: 3,
    center: { lat: 5, lng: 170.644 },
  })

  useEffect(() => {
    setMapOption(GetMapOptions(type))
  }, [])

  const onLoad = () => {
    const result = coord.map<google.maps.LatLng[] | google.maps.LatLng[][]>((el) =>
      ConvertLatLng(el)
    )
    setRegionArr(coord.map<string>((el) => el.iso))
    setPolygonData(result)
  }
  const handleMouseOver = (idx: number) => {
    setindex(idx)
  }

  return (
    <CoffeeMapContainer>
      <LoadScript
        onLoad={onLoad}
        mapIds={['ae2e13f24821623f']}
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY as string}>
        <GoogleMap
          zoom={mapOption.zoom}
          center={mapOption.center}
          mapContainerStyle={{
            width: '100%',
            height: '100%',
          }}
          options={{
            mapId: 'ae2e13f24821623f',
            disableDefaultUI: true,
            disableDoubleClickZoom: true,
            minZoom: 2.3,
            scrollwheel: false,
            draggable: false,
          }}>
          {PolygonData &&
            PolygonData.map((el: google.maps.LatLng[] | google.maps.LatLng[][], idx) => (
              <>
                <Polygon
                  paths={el}
                  onMouseOver={() => handleMouseOver(idx)}
                  onClick={handleRegionClick && (() => handleRegionClick(RegionArr[idx]))}
                  onLoad={(data) => console.log(data)}
                  onUnmount={() => console.log('unload')}
                  options={
                    idx === index
                      ? {
                          fillColor: '#362415',
                          strokeColor: '#0B421A',
                          strokeOpacity: 1,
                          fillOpacity: 0.1,
                          zIndex: 9999,
                          strokeWeight: 2,
                        }
                      : {
                          fillColor: '#604C4C',
                          strokeColor: '#362415',
                          strokeOpacity: 1,
                          fillOpacity: 0.2,
                          zIndex: 9998,
                          strokeWeight: 1,
                        }
                  }
                />
                <OverlayView
                  position={GetMapOptions(RegionArr[index]).center}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                  <div>{RegionArr[index]}</div>
                </OverlayView>
              </>
            ))}
        </GoogleMap>
      </LoadScript>
    </CoffeeMapContainer>
  )
}
