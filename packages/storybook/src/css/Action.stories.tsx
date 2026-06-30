import reactMeta from '../react/Action.stories';

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
  WithIndicatorAndDate,
  WithDateRelative,
  WithDateWarning,
  List,
} from '../react/Action.stories';

export default meta;
