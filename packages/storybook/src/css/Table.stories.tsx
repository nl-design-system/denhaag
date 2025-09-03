import reactMeta from '../react/Table.stories';

const meta: typeof reactMeta = {
  ...reactMeta,
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
