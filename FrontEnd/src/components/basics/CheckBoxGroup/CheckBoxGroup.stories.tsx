import React, { ComponentProps } from 'react';
import CheckBoxGroup from './CheckBoxGroup';
import { CheckBoxButtonProps } from './CheckBox';
import { StoryTemplate } from '@utils';

export default {
  title: 'CheckBoxGroup',
  component: CheckBoxGroup,
};

const Template = StoryTemplate<
  ComponentProps<typeof CheckBoxGroup>,
  typeof CheckBoxGroup
>(CheckBoxGroup);

export const Default = Template.bind({});
Default.args = {
  buttonProps: [
    { id: '1', value: 'Cris is DOPE', withLabel: false, name: 'nah' },
  ],
};

export const MultipleItems = Template.bind({});
const GroupArgs: CheckBoxButtonProps[] = [
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
MultipleItems.args = { buttonProps: GroupArgs };

export const MultipleItemsWithLabels = Template.bind({});
const GroupLabelArgs: CheckBoxButtonProps[] = [
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
];
MultipleItemsWithLabels.args = { buttonProps: GroupLabelArgs };

export const MultipleLotsofItems = Template.bind({});
const GroupLotsArgs: CheckBoxButtonProps[] = [
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
MultipleLotsofItems.args = { buttonProps: GroupLotsArgs };

export const MultipleLotsofItemsWithSuperLongName = Template.bind({});

const GroupLotsArgsLong: CheckBoxButtonProps[] = [
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
MultipleLotsofItemsWithSuperLongName.args = { buttonProps: GroupLotsArgsLong };
