import reactMeta from '../react/CaseCard.stories';

const meta: typeof reactMeta = {
  ...reactMeta,
  title: 'CSS/CaseCard',
  id: 'css-casecard',
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
  List,
  ListWithDate,
  ListWithCaseNumber,
} from '../react/CaseCard.stories';
