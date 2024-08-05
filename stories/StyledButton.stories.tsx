import type { Meta, StoryObj } from "@storybook/react";
import { StyledButton } from "@/components/StyledButton";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Example/StyledButton",
  component: StyledButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["primary", "success", "transparent"],
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
    onClick: action("clicked"),
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
    onClick: action("clicked"),
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
    children: "Transparent",
    onClick: action("clicked"),
  },
};
