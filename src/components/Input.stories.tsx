import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';
import { InputProps } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {InputProps: {control: {disable: true}}},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
  placeholder: 'Placeholder',
  name: 'Input',
  value: 'Input',
  disabled: false,
};
