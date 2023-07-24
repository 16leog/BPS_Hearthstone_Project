import { Meta, StoryObj } from '@storybook/react';
import HomeGrid from './HomeGrid';

const meta: Meta<typeof HomeGrid> = {
  component: HomeGrid,
};

export default meta;
type Story = StoryObj<typeof HomeGrid>;

export const Primary: Story = {
  render: () => <HomeGrid />,
};
