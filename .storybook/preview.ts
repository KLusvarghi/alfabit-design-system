import type { Preview } from "@storybook/react";
// iportanto todos os arquivos de estilização
import '../styles/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
