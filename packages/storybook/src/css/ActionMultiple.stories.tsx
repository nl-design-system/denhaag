import reactMeta from '../react/ActionMultiple.stories';

const meta: typeof reactMeta = {
  ...reactMeta,
  tags: ['autodocs'],
};

export {
  Default,
  Hover,
  Focus,
  WithBadge,
  WithDate,
  WithDateRelative,
  WithDateWarning,
  List,
} from '../react/ActionMultiple.stories';

export default meta;
