import reactMeta from '../react/FormField.stories';

const meta: typeof reactMeta = {
  ...reactMeta,
  tags: ['autodocs'],
};

export {
  Default,
  WithDescription,
  WithDescriptionAndIcon,
  Invalid,
  SingleCheckbox,
  CheckboxGroup,
  CheckboxGroupWithDescription,
  RadioButtonGroup,
  RadioButtonGroupWithDescription,
  SelectInput,
  SelectMultipleInput,
  FileUpload,
  FileUploadSingleWithUploadedFile,
  FileUploadMultipleWithUploadedFile,
  FileUploadMultipleLoading,
  FileUploadError,
} from '../react/FormField.stories';

export default meta;
