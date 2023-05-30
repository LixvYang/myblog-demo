import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

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
  plugins: [
    searchProPlugin({
      indexContent: true,
      hotReload: true,
      customFields: [
        {
          getter: ({ frontmatter }) => frontmatter.tag as string[],
          formatter: `标签：$content`,
        },
        {
          getter: ({ frontmatter }) => frontmatter.category as string[],
          formatter: `种类：$content`,
        },
      ],
    }),
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
