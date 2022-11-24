import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    backdropGrayscale: (theme) => theme('grayscale'),
    grayscale: {
      0: '0',
      DEFAULT: '100%',
    },
  },
} as Options;
