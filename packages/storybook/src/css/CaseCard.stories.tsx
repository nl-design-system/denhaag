import reactMeta from '../react/CaseCard.stories';

const meta: typeof reactMeta = {
  ...reactMeta,
  tags: ['autodocs'],
};

export default meta;

export { Default, WithDate, Inactive } from '../react/CaseCard.stories';
