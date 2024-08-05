import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: "iPhone X",
          styles: {
            width: "375px",
            height: "812px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1024px",
            height: "768px",
          },
        },
      },
    },
    backgrounds: {
      values: [
        { name: "white", value: "#ffffff" },
        { name: "black", value: "#000000" },
        { name: "gray", value: "#808080" },
      ],
    },
  },
};

export default preview;
