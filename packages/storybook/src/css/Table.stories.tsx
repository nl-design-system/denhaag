import reactMeta from '../react/Table.stories';

const meta: typeof reactMeta = {
  ...reactMeta,
  id: 'css-data-display-table',
  title: 'CSS/Table',
  tags: ['autodocs'],
};

export {
  Default,
  Hover,
  Focus,
  HorizontalAlign,
  VerticalAlign,
  Simple,
  LongTitle,
  WithLink,
  WithActions,
} from '../react/Table.stories';

export default meta;
