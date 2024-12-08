/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  docs: {
    autodocs: true,
  },
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    // "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;
