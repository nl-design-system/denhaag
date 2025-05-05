import reactMeta from '../react/CaseCard.stories';

const meta: typeof reactMeta = {
  ...reactMeta,
  tags: ['autodocs'],
};

export default meta;

export {
  Default,
  WithDate,
  WithCaseNumber,
  Inactive,
  InactiveWithDate,
  InactiveWithCaseNumber,
} from '../react/CaseCard.stories';
