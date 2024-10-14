import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [ // dentro deste array tem os caminhos onde o storybook irá procurar por stories e por documentações
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["..\\public"], // por padrão ele já veio com o staticDirs, que é onde está localizado a pasta que contem nosso arquivos staticos, como a logo
};
export default config;
