import "../src/app/globals.css";
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import { WithProviders } from './decorators';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/en",
      },
    },
  },
  decorators: [
    WithProviders, // Apply global decorators for all stories
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  tags: ["autodocs"],
};

export default preview;
