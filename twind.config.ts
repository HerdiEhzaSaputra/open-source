import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  darkMode: "media",
  theme: {
    backdropGrayscale: (theme) => theme('grayscale'),
    grayscale: {
      0: '0',
      DEFAULT: '100%',
    },
  }
} as Options;
