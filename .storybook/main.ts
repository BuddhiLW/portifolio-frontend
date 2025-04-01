import { StorybookConfig } from "@storybook/experimental-nextjs-vite";
import path from "path";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
  ],
  framework: "@storybook/experimental-nextjs-vite",
  staticDirs: ["../public"],
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    check: false,
  },
  
  // Configure Vite for path resolution
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        'process.env': process.env,
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
          '@/hooks/useChat': path.resolve(__dirname, './mocks/hooks/useChat.ts'),
          '@/lib/utils': path.resolve(__dirname, './mocks/lib/utils.ts'),
          '@/components/ui/button': path.resolve(__dirname, './mocks/components/ui/button.tsx'),
          '@/components/ui/carousel': path.resolve(__dirname, './mocks/components/ui/carousel.tsx'),
          '@/components/chat/EmptyContent': path.resolve(__dirname, './mocks/components/chat/EmptyContent.tsx'),
          '@/components/shared/MarkdownReadme': path.resolve(__dirname, './mocks/components/shared/MarkdownReadme.tsx'),
          '@/components/shared/Container': path.resolve(__dirname, './mocks/components/shared/Container.tsx'),
          '@/model/Msg': path.resolve(__dirname, './mocks/model/Msg.ts'),
          '@/hooks': path.resolve(__dirname, '../src/hooks'),
          '@/components': path.resolve(__dirname, '../src/components'),
          '@/functions': path.resolve(__dirname, '../src/functions'),
          '@/model': path.resolve(__dirname, '../src/model'),
          '@/lib': path.resolve(__dirname, '../src/lib'),
          '@core': path.resolve(__dirname, '../src/types/core.d.ts'),
          '../core': path.resolve(__dirname, './mocks/core-proxy.js'),
          '@buddhilw/core': path.resolve(__dirname, './mocks/buddhilw-core.js'),
        }
      },
      optimizeDeps: {
        include: ['next-intl', 'next-themes'],
      },
    });
  }
};

export default config;
