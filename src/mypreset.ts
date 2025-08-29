import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#0B4777',
      100: '#424242',
      200: '#82b1ff',
      300: '#ff5252',
      400: '#2196f3',
      500: '#4caf50',
      600: '#ffc107',
      700: '#475467',
      800: '#646976',
      900: '#f9fafb',
      950: '#252c32',
    },
  },
});

export default MyPreset;
