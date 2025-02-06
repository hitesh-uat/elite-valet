import Slider, { SliderProps } from '@mui/material/Slider'

export const RangeSlider = (props: SliderProps) => (
  <div className="w-full pt-6 pl-2 pr-4">
    <Slider
      valueLabelDisplay="on"
      classes={{
        root: `h-1.5 w-full border-0 `,
        thumb:
          'rounded-full border w-4 h-4 after:active:bg-black/10 after:w-8 after:h-8 after:rounded-none bg-primary hover:shadow-none hover:border-black hover:bg-primary-100 focus:bg-gray-50',
        track: 'text-primary-600 ',
        rail: 'text-grey-400',
        valueLabel:
          'text-black rounded-none py-1 px-0.5 text-sm bg-white/20 h-0 w-0',
      }}
      {...props}
    />
  </div>
)
