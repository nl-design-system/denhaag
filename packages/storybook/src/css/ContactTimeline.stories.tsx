import reactMeta from '../react/ContactTimeline.stories';

const meta: typeof reactMeta = {
  ...reactMeta,
  tags: ['autodocs'],
};

export {
  Default,
  Collapsible,
  CollapsibleWithExpandedItem,
  WithoutSender,
  WithFile,
} from '../react/ContactTimeline.stories';

export default meta;
