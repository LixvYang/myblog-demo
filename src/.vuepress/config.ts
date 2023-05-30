import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/",
  lang: "zh-CN",

  // locales: {
  //   "/": {
  //     lang: "en-US",
  //     title: "Blog",
  //   },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "博客",
  //   },
  // },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
