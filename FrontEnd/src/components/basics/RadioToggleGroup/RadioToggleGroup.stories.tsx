import React, { ComponentProps } from 'react';
import RadioToggleGroup from './RadioToggleGroup';
import { RadioToggleProps } from './RadioToggle';
import { StoryTemplate } from '@utils';

export default {
  title: 'RadioToggleGroup',
  component: RadioToggleGroup,
};

const Template = StoryTemplate<
  ComponentProps<typeof RadioToggleGroup>,
  typeof RadioToggleGroup
>(RadioToggleGroup);

export const Default = Template.bind({});
Default.args = {
  toggleProps: [
    { id: '1', value: 'Cris is DOPE', withLabel: false, name: 'nah' },
  ],
};

export const MultipleItems = Template.bind({});
const GroupArgs: RadioToggleProps[] = [
  {
    id: '1',
    value: 'Meh',
    name: 'mood',
    withLabel: false,
  },
  {
    id: '2',
    value: 'RIP',
    name: 'mood',
    withLabel: false,
  },
  {
    id: '3',
    value: 'OOF',
    name: 'mood',
    withLabel: false,
  },
];
MultipleItems.args = { toggleProps: GroupArgs };

export const MultipleItemsWithLabels = Template.bind({});
const GroupLabelArgs: RadioToggleProps[] = [
  {
    id: '1',
    value: 'Meh',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '2',
    value: 'RIP',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '3',
    value: 'OOF',
    name: 'mood',
    withLabel: true,
  },
  {
    value: 'GG',
    name: 'mood',
    withLabel: true,
  },
];
MultipleItemsWithLabels.args = { toggleProps: GroupLabelArgs };

export const MultipleLotsofItems = Template.bind({});
const GroupLotsArgs: RadioToggleProps[] = [
  {
    id: '1',
    value: 'Meh',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '2',
    value: 'RIP',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '3',
    value: 'OOF',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '4',
    value: 'Ha',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '5',
    value: 'Yo',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '6',
    value: 'AH',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '7',
    value: 'Sigh',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '8',
    value: 'Damn',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '9',
    value: 'Huh',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '10',
    value: 'Bad',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '11',
    value: 'JKJK',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '12',
    value: 'Sad af',
    name: 'mood',
    withLabel: true,
  },
];
MultipleLotsofItems.args = { toggleProps: GroupLotsArgs };

export const MultipleLotsofItemsWithSuperLongName = Template.bind({});

const GroupLotsArgsLong: RadioToggleProps[] = [
  {
    id: '1',
    value:
      'Mehwlkjfinkwcjoifewgkrjcnlvijw4iercjmfpv d;okr/sve;krco[dkr;/stvjgcmrselrvjhkr.elw/jmcnh.ela;cm',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '2',
    value: 'RIP',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '3',
    value: 'OOF',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '4',
    value: 'Ha',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '5',
    value: 'Yo',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '6',
    value: 'AH',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '7',
    value: 'Sigh',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '8',
    value: 'Damn',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '9',
    value: 'Huh',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '10',
    value: 'Badjntveso elrjvoeijfmvowelfcjqewn;vtilugekrjsfc h',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '11',
    value: 'JKJK',
    name: 'mood',
    withLabel: true,
  },
  {
    id: '12',
    value: 'Sad afsdlkfniesjanfivelslucsfjnhelirkrjcfnwlervjcnepqorctvniretwc',
    name: 'mood',
    withLabel: true,
  },
];
MultipleLotsofItemsWithSuperLongName.args = { toggleProps: GroupLotsArgsLong };
