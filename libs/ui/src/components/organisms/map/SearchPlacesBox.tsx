import { majorCitiesLocationInfo } from '@elitevalet/util/constants'
import { useSearchLocation } from '@elitevalet/util/hooks/location'
import { LocationInfo, ViewState } from '@elitevalet/util/types'
import { useMap } from 'react-map-gl'
import { Autocomplete } from '../../atoms/Autocomplete'

export const SearchPlaceBox = ({
  onLocationChange,
  className,
  inputClassName,
}: {
  onLocationChange?: (location: ViewState) => void
  className?: string
  inputClassName?: string
}) => {
  const { current: map } = useMap()
  const { loading, locationInfo, searchText, setLoading, setSearchText } =
    useSearchLocation()

  return (
    <Autocomplete<LocationInfo>
      className={className}
      inputClassName={inputClassName}
      options={locationInfo?.length ? locationInfo : majorCitiesLocationInfo}
      isOptionEqualToValue={(option, value) =>
        option.placeName === value.placeName
      }
      noOptionsText={searchText ? 'No options.' : 'Type something...'}
      getOptionLabel={(x) => x.placeName}
      onInputChange={(_, v) => {
        setLoading(true)
        setSearchText(v)
      }}
      loading={loading}
      onChange={async (_, v) => {
        if (v) {
          const { latLng, placeName } = v
          await map?.flyTo({
            center: { lat: latLng[0], lng: latLng[1] },
            zoom: 12,
            // essential: true,
          })
          if (onLocationChange) {
            onLocationChange({ latitude: latLng[0], longitude: latLng[1] })
          }
        }
      }}
    />
  )
}
