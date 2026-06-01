import {definePreset} from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{stone.50}',
      100: '{stone.100}',
      200: '{stone.200}',
      300: '{stone.300}',
      400: '{stone.400}',
      500: '{stone.500}',
      600: '{stone.600}',
      700: '{stone.700}',
      800: '{stone.800}',
      900: '{stone.900}',
      950: '{stone.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{stone.950}',
          inverseColor: '{stone.50}',
          hoverColor: '{stone.900}',
          activeColor: '{stone.800}'
        },
        highlight: {
          background: '{stone.950}',
          focusBackground: '{stone.700}',
          color: '{stone.50}',
          focusColor: '{stone.50}'
        }
      },
    }
  }
});
