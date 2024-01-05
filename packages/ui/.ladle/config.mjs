/** @type {import('@ladle/react').UserConfig} */
export default {
  stories: "src/**/*.stories.{tsx,mdx}",
  appendToHead: "<style>.ladle-background {display: none;}</style>",
  addons: {
  ladle: {
    enabled: false
  },
  mode: {
    enabled: false
  },
  rtl: {
    enabled: false
  }
}
};