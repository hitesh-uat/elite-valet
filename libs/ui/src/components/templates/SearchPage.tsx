'use client'
import { FormTypeSearchGarage } from '@elitevalet/forms/src/searchGarages'
import { initialViewState } from '@elitevalet/util/constants'
import { toLocalISOString } from '@elitevalet/util/date'
import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { ViewStateChangeEvent } from 'react-map-gl'
import { HtmlInput } from '../atoms/HtmlInput'
import { IconType } from '../molecules/IconTypes'
import { Map } from '../organisms/map/Map'
import { Panel } from '../organisms/map/Panel'
import { SearchPlaceBox } from '../organisms/map/SearchPlacesBox'
import { DefaultZoomControls } from '../organisms/map/ZoomControls'
import { FilterSidebar } from '../organisms/search/FilterSidebar'
import { ShowGarages } from '../organisms/search/ShowGarages'

export const SearchPage = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useFormContext<FormTypeSearchGarage>()
  const formData = watch()

  const handleMapChange = useCallback(
    (target: ViewStateChangeEvent['target']) => {
      const bounds = target?.getBounds()
      const locationFilter = {
        ne_lat: bounds?.getNorthEast().lat || 0,
        ne_lng: bounds?.getNorthEast().lng || 0,
        sw_lat: bounds?.getSouthWest().lat || 0,
        sw_lng: bounds?.getSouthWest().lng || 0,
      }
      setValue('locationFilter', locationFilter)
    },
    [setValue],
  )

  return (
    <Map
      onLoad={(e) => handleMapChange(e.target)}
      onDragEnd={(e) => handleMapChange(e.target)}
      onZoomEnd={(e) => handleMapChange(e.target)}
      initialViewState={initialViewState}
    >
      <ShowGarages />

      {/* Left Side Panel */}
      <Panel position="left-top">
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-lg shadow-xl p-4 space-y-4">
            <SearchPlaceBox
              className="border-2 border-primary-100 focus-within:border-primary-300 rounded-lg"
              inputClassName="text-primary-900"
            />

            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-primary-700">
                  Start Time
                </label>
                <div className="relative flex items-center gap-2">
                  <IconType
                    time={formData.startTime}
                    className="text-primary-500 absolute left-3"
                  />
                  <HtmlInput
                    type="datetime-local"
                    className="w-full pl-10 pr-3 py-2 border-2 border-primary-100 rounded-lg 
                             focus:border-primary-500 focus:ring-1 focus:ring-primary-500 
                             transition-colors duration-200"
                    min={toLocalISOString(new Date()).slice(0, 16)}
                    {...register('startTime', {
                      onChange(event) {
                        trigger('startTime')
                        trigger('endTime')
                      },
                    })}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-primary-700">
                  End Time
                </label>
                <div className="relative flex items-center gap-2">
                  <IconType
                    time={formData.endTime}
                    className="text-primary-500 absolute left-3"
                  />
                  <HtmlInput
                    min={toLocalISOString(new Date()).slice(0, 16)}
                    type="datetime-local"
                    className="w-full pl-10 pr-3 py-2 border-2 border-primary-100 rounded-lg 
                             focus:border-primary-500 focus:ring-1 focus:ring-primary-500 
                             transition-colors duration-200"
                    {...register('endTime', {
                      onChange(event) {
                        trigger('endTime')
                      },
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Panel>

      {/* Zoom Controls */}
      <Panel position="right-center">
        <DefaultZoomControls />
      </Panel>

      {/* Error Messages */}
      {errors && (
        <Panel position="center-bottom">
          <div className="space-y-2">
            {Object.entries(errors).map(([key, value]) => (
              <div
                key={key}
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg shadow-sm"
              >
                {value.message}
              </div>
            ))}
          </div>
        </Panel>
      )}

      {/* Filter Sidebar */}
      <Panel position="right-top">
        <FilterSidebar
          className="bg-white rounded-lg shadow-xl p-4"
          toggleButtonClassName="bg-primary-600 hover:bg-primary-700 text-white"
        />
      </Panel>
    </Map>
  )
}
