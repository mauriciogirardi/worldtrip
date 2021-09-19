// theme project
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353656',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#DADADA',
      '50': '#EEEEF2'
    },

    white: {
      '50': '#F5F8FA'
    },
    yellow: {
      '400': '#FFBA08'
    }
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },

  styles: {
    global: {
      body: {
        bg: 'white.50',
        color: '#47585B'
      }
    }
  }
})
