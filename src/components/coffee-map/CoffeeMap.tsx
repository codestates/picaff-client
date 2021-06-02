import { GoogleMap, LoadScript, OverlayView, Polygon } from '@react-google-maps/api'
import Overlay from 'components/ovelay/Overlay'
import { itemResult, MapOption } from 'interface'
import { GetMapOptions } from 'module/Coffeemap'
import { ConvertLatLng } from 'module/Polygon'
import { useEffect, useState } from 'react'
import { CoffeeMapContainer } from './CoffeeMap.style'
import { default as coord } from './polygon.json'

type maptype = {
  type: 'KE' | 'GT' | 'CO' | 'ET' | 'BR' | 'All'
  handleRegionClick?: (Region: string) => void
  coffee: itemResult[] | itemResult
  selectedTag?: string
}

const getWindowDimension = (): number => {
  const { innerWidth: width } = window
  return width
}

export default function CoffeeMap({ type, handleRegionClick, coffee, selectedTag }: maptype) {
  const [PolygonData, setPolygonData] =
    useState<(google.maps.LatLng[] | google.maps.LatLng[][])[] | undefined>(undefined)
  const [index, setindex] = useState<number>(0)
  const [RegionArr, setRegionArr] = useState<{ country: string; iso: string }[]>([])
  const [mapOption, setMapOption] = useState<MapOption>({
    zoom: 3,
    center: { lat: 5, lng: 170.644 },
  })
  const [screenwidth, setscreenwidth] = useState<number>(getWindowDimension())
  useEffect(() => {
    setMapOption(GetMapOptions(type))

    function handleResize() {
      setscreenwidth(getWindowDimension())
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (screenwidth <= 375) {
      setMapOption(GetMapOptions(type, 'S'))
    } else if (screenwidth <= 768) {
      setMapOption(GetMapOptions(type, 'M'))
    } else if (screenwidth <= 1440) {
      setMapOption(GetMapOptions(type, 'L'))
    } else if (screenwidth > 1440) {
      setMapOption(GetMapOptions(type, 'XL'))
    }
  }, [screenwidth])

  useEffect(() => {
    if (type !== 'All') {
      RegionArr.forEach((el, idx) => {
        if (el.iso === type) {
          setindex(idx)
        }
      })
    }
  }, [RegionArr])

  const onLoad = () => {
    const result = coord.map<google.maps.LatLng[] | google.maps.LatLng[][]>((el) =>
      ConvertLatLng(el)
    )
    setRegionArr(
      coord.map<{ country: string; iso: string }>((el) => ({
        country: el.country,
        iso: el.iso,
      }))
    )
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
            minZoom: 1,
            scrollwheel: false,
            draggable: false,
          }}>
          {PolygonData &&
            PolygonData.map((el: google.maps.LatLng[] | google.maps.LatLng[][], idx) => {
              let coffeeArr: itemResult[] | undefined
              if (RegionArr && Array.isArray(coffee)) {
                coffeeArr = RegionArr.map<itemResult>((el) => {
                  for (let i = 0; i < coffee.length; i++) {
                    if (el.iso === coffee[i].iso) {
                      return coffee[i]
                    }
                  }
                  return {
                    id: 0,
                    itemName: '',
                    itemPrice: 0,
                    itemDetail: '',
                    type: 'coffee',
                    imageUrl: '',
                    iso: '',
                    isLiked: false,
                    tag: [{ id: 0, tagName: '' }],
                  }
                })
              }
              let active = false
              if (coffeeArr) {
                for (let i = 0; i < coffeeArr[idx].tag.length; i++) {
                  if (selectedTag === coffeeArr[idx].tag[i].tagName) {
                    active = true
                  }
                }
              }
              return (
                <>
                  <Polygon
                    paths={el}
                    onMouseOver={type === 'All' ? () => handleMouseOver(idx) : undefined}
                    onClick={
                      type === 'All'
                        ? handleRegionClick && (() => handleRegionClick(RegionArr[idx].iso))
                        : undefined
                    }
                    onLoad={() => console.log('loaddone')}
                    onUnmount={() => console.log('unload')}
                    options={
                      idx === index || active
                        ? {
                            fillColor: '#0B421A',
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
                  {idx === index && (
                    <OverlayView
                      position={GetMapOptions(RegionArr[index].iso).center}
                      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                      <Overlay
                        coffeeItem={Array.isArray(coffee) ? coffeeArr![index] : coffee}
                        name={RegionArr[index].country}
                      />
                    </OverlayView>
                  )}
                </>
              )
            })}
        </GoogleMap>
      </LoadScript>
    </CoffeeMapContainer>
  )
}
