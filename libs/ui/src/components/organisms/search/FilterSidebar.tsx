import {
  FormTypeSearchGarage,
  formDefaultValuesSearchGarages,
} from '@elitevalet/forms/src/searchGarages'
import { IconFilter } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Button } from '../../atoms/Button'
import { PulsingDot } from '../../atoms/Dot'
import { FilterHeading } from '../../molecules/FilterHeading'
import { IconTypes } from '../../molecules/IconTypes'
import { RangeSlider } from '../../molecules/RangeSlider'
import {
  ToggleButton,
  ToggleButtonGroup,
} from '../../molecules/ToggleButtonGroup'
import { Sidebar } from '../Sidebar'

export const FilterSidebar = ({
  className,
  toggleButtonClassName,
}: {
  className?: string
  toggleButtonClassName?: string
}) => {
  const [open, setOpen] = useState(false)
  const {
    control,
    reset,
    getValues,
    formState: { dirtyFields },
  } = useFormContext<FormTypeSearchGarage>()

  return (
    <>
      <Button
        size="sm"
        variant="text"
        onClick={() => setOpen(true)}
        className={`hover:bg-gray-200 ${toggleButtonClassName || ''}`}
      >
        <IconFilter className="stroke-1.5 text-black" />
        {Object.values(dirtyFields).length ? <PulsingDot /> : null}
      </Button>
      <Sidebar open={open} setOpen={setOpen} blur={false}>
        <div className={`flex flex-col items-start gap-3 ${className || ''}`}>
          <Controller
            name="types"
            control={control}
            render={({
              field: { value = [], onChange },
              fieldState: { isDirty },
              formState: { defaultValues },
            }) => {
              return (
                <div>
                  <FilterHeading dirty={isDirty} title="Vehicle type" />
                  <ToggleButtonGroup
                    value={value}
                    onChange={(_, value) => {
                      onChange(value.sort())
                    }}
                    aria-label="vehicle type selection"
                  >
                    {defaultValues?.types?.map((val) => {
                      if (!val) return null
                      return (
                        <ToggleButton
                          key={val}
                          value={val}
                          selectedClassName="!border-primary !bg-primary/10"
                          className="h-20 w-20 hover:bg-gray-50/50"
                        >
                          <div className="flex flex-col items-center gap-2">
                            {React.cloneElement(IconTypes[val], {
                              className: `w-8 h-8 ${
                                value.includes(val)
                                  ? 'text-primary'
                                  : 'text-gray-400'
                              }`,
                            })}
                            <span
                              className={`text-xs font-medium ${
                                value.includes(val)
                                  ? 'text-primary'
                                  : 'text-gray-500'
                              }`}
                            >
                              {val.toLowerCase().replace(/_/g, ' ')}
                            </span>
                          </div>
                        </ToggleButton>
                      )
                    })}
                  </ToggleButtonGroup>
                </div>
              )
            }}
          />
          <Controller
            name="pricePerHour"
            control={control}
            render={({
              field: { value, onChange },
              fieldState: { isDirty },
              formState: { defaultValues },
            }) => {
              return (
                <div className="w-full">
                  <FilterHeading dirty={isDirty} title="Price per hour" />
                  <RangeSlider
                    min={defaultValues?.pricePerHour?.[0]}
                    max={defaultValues?.pricePerHour?.[1]}
                    // max={200}
                    value={value}
                    onChange={onChange}
                    valueLabelFormat={(sliderValue) =>
                      `$ ${sliderValue.toLocaleString()}`
                    }
                    step={5}
                  />
                </div>
              )
            }}
          />
          <Controller
            name="width"
            control={control}
            render={({
              field: { value, onChange },
              fieldState: { isDirty },
              formState: { defaultValues },
            }) => {
              return (
                <div className="w-full">
                  <FilterHeading dirty={isDirty} title="Width" />
                  <RangeSlider
                    min={defaultValues?.width?.[0]}
                    max={defaultValues?.width?.[1]}
                    value={value}
                    onChange={onChange}
                    valueLabelFormat={(sliderValue) =>
                      `${sliderValue.toLocaleString()} ft`
                    }
                    step={2}
                  />
                </div>
              )
            }}
          />
          <Controller
            name="height"
            control={control}
            render={({
              field: { value, onChange },
              fieldState: { isDirty },
              formState: { defaultValues },
            }) => {
              return (
                <div className="w-full">
                  <FilterHeading dirty={isDirty} title="Height" />
                  <RangeSlider
                    min={defaultValues?.height?.[0]}
                    max={defaultValues?.height?.[1]}
                    value={value}
                    onChange={onChange}
                    valueLabelFormat={(sliderValue) =>
                      `${sliderValue.toLocaleString()} ft`
                    }
                    step={2}
                  />
                </div>
              )
            }}
          />
          <Controller
            name="length"
            control={control}
            render={({
              field: { value, onChange },
              fieldState: { isDirty },
              formState: { defaultValues },
            }) => {
              return (
                <div className="w-full">
                  <FilterHeading dirty={isDirty} title="Length" />
                  <RangeSlider
                    min={defaultValues?.length?.[0]}
                    max={defaultValues?.length?.[1]}
                    value={value}
                    onChange={onChange}
                    valueLabelFormat={(sliderValue) =>
                      `${sliderValue.toLocaleString()} ft`
                    }
                    step={5}
                  />
                </div>
              )
            }}
          />
          <Button
            onClick={() =>
              reset({ ...getValues(), ...formDefaultValuesSearchGarages })
            }
            disabled={!Object.values(dirtyFields).length}
          >
            Reset
          </Button>
        </div>
      </Sidebar>
    </>
  )
}
