import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '@gemeente-denhaag/checkbox';
import { FormField } from '@gemeente-denhaag/form-field';
import { FormFieldDescription } from '@gemeente-denhaag/form-field-description';
import { FormFieldErrorMessage } from '@gemeente-denhaag/form-field-error-message';
import { FormLabel } from '@gemeente-denhaag/form-label';
import { Fieldset, FieldsetLegend } from '@gemeente-denhaag/form-fieldset';
import { TextInput } from '@gemeente-denhaag/text-input';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { RadioButton } from '@gemeente-denhaag/radio-button';
import readme from '../../../../components/FormField/README.md?raw';
import { Select, SelectOption } from '@gemeente-denhaag/select';
import { SearchIcon } from '@gemeente-denhaag/icons';

const meta = {
  id: 'css-input-form-field',
  title: 'CSS/Form Field',
  component: FormField,
  args: {},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FormField>
      <FormLabel htmlFor="input-default">Username</FormLabel>
      <TextInput id="input-default" placeholder="Placeholder" />
    </FormField>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <FormField>
      <FormLabel htmlFor="input-with-description">Username</FormLabel>
      <FormFieldDescription>Vul hier uw username in</FormFieldDescription>
      <TextInput id="input-with-description" placeholder="Placeholder" />
    </FormField>
  ),
};

export const WithDescriptionAndIcon: Story = {
  render: () => (
    <FormField>
      <FormLabel htmlFor="input-with-description-and-icon">Username</FormLabel>
      <FormFieldDescription>Vul hier uw username in</FormFieldDescription>
      <TextInput id="input-with-description-and-icon" placeholder="Placeholder" iconEnd={<SearchIcon />} />
    </FormField>
  ),
};

export const Invalid: Story = {
  render: () => (
    <FormField invalid>
      <FormLabel htmlFor="input-invalid">Username</FormLabel>
      <FormFieldDescription>Description</FormFieldDescription>
      <TextInput id="input-invalid" placeholder="Placeholder" invalid />
      <FormFieldErrorMessage>Error message</FormFieldErrorMessage>
    </FormField>
  ),
};

export const SingleCheckbox: Story = {
  render: () => (
    <FormField type="checkbox">
      <Paragraph className="utrecht-form-field__label utrecht-form-field__label--checkbox">
        <FormLabel type="checkbox">
          <Checkbox name="consent" className="utrecht-form-field__input" />
          Ik ga akkoord met de algemene voorwaarden
        </FormLabel>
      </Paragraph>
    </FormField>
  ),
};

export const CheckboxGroup: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend className="utrecht-form-fieldset__legend--distanced">
        Hoe wil je dat wij contact opnemen?
      </FieldsetLegend>
      <FormField type="checkbox">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--checkbox">
          <FormLabel htmlFor="4e054ee1-799e-4608-9055-19d3fc0b88e9" type="checkbox">
            <Checkbox
              aria-describedby="4e054ee1-799e-4608-9055-19d3fc0b88e9-description"
              className="utrecht-form-field__input"
              id="4e054ee1-799e-4608-9055-19d3fc0b88e9"
              name="phone"
              value="true"
            />
            Telefoon
          </FormLabel>
        </Paragraph>
      </FormField>
      <FormField type="checkbox">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--checkbox">
          <FormLabel htmlFor="238b2692-2460-4bad-93b5-b6def8c3b820" type="checkbox">
            <Checkbox
              aria-describedby="238b2692-2460-4bad-93b5-b6def8c3b820-description"
              className="utrecht-form-field__input"
              id="238b2692-2460-4bad-93b5-b6def8c3b820"
              name="email"
              value="true"
            />
            E-mail
          </FormLabel>
        </Paragraph>
      </FormField>
      <FormField type="checkbox">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--checkbox">
          <FormLabel htmlFor="6a1b86d8-f5d2-4852-9f95-b6690ac3d0e2" type="checkbox">
            <Checkbox
              aria-describedby="6a1b86d8-f5d2-4852-9f95-b6690ac3d0e2-description"
              className="utrecht-form-field__input"
              id="6a1b86d8-f5d2-4852-9f95-b6690ac3d0e2"
              name="letter"
              value="true"
            />
            Brief
          </FormLabel>
        </Paragraph>
      </FormField>
    </Fieldset>
  ),
};

export const CheckboxGroupWithDescription: Story = {
  render: () => (
    <Fieldset aria-describedby="c7218515-bf54-45c1-ba57-a72af5d7fd42-description">
      <FieldsetLegend>Hoe wil je dat wij contact opnemen?</FieldsetLegend>
      <FormFieldDescription
        className="utrecht-form-field-description--distanced"
        id="c7218515-bf54-45c1-ba57-a72af5d7fd42-description"
      >
        Kies één of meerdere opties.
      </FormFieldDescription>
      <FormField type="checkbox">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--checkbox">
          <FormLabel htmlFor="3e054ee1-799e-4608-9055-19d3fc0b88e9" type="checkbox">
            <Checkbox
              aria-describedby="3e054ee1-799e-4608-9055-19d3fc0b88e9-description"
              className="utrecht-form-field__input"
              id="3e054ee1-799e-4608-9055-19d3fc0b88e9"
              name="phone"
              value="true"
            />
            Telefoon
          </FormLabel>
        </Paragraph>
      </FormField>
      <FormField type="checkbox">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--checkbox">
          <FormLabel htmlFor="138b2692-2460-4bad-93b5-b6def8c3b820" type="checkbox">
            <Checkbox
              aria-describedby="138b2692-2460-4bad-93b5-b6def8c3b820-description"
              className="utrecht-form-field__input"
              id="138b2692-2460-4bad-93b5-b6def8c3b820"
              name="email"
              value="true"
            />
            E-mail
          </FormLabel>
        </Paragraph>
      </FormField>
      <FormField type="checkbox">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--checkbox">
          <FormLabel htmlFor="5a1b86d8-f5d2-4852-9f95-b6690ac3d0e2" type="checkbox">
            <Checkbox
              aria-describedby="5a1b86d8-f5d2-4852-9f95-b6690ac3d0e2-description"
              className="utrecht-form-field__input"
              id="5a1b86d8-f5d2-4852-9f95-b6690ac3d0e2"
              name="letter"
              value="true"
            />
            Brief
          </FormLabel>
        </Paragraph>
      </FormField>
    </Fieldset>
  ),
};

export const RadioButtonGroup: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend className="utrecht-form-fieldset__legend--distanced">
        Hoe wil je dat wij contact opnemen?
      </FieldsetLegend>
      <FormField type="radio">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel htmlFor="4e054ee1-799e-4608-9055-19d3fc0b88e0" type="radio">
            <RadioButton
              className="utrecht-form-field__input"
              id="4e054ee1-799e-4608-9055-19d3fc0b88e0"
              name="828aa90e-0e99-4db9-a5e5-d39f689cf7b2"
              value="phone"
            />
            Telefoon
          </FormLabel>
        </Paragraph>
      </FormField>
      <FormField type="radio">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel htmlFor="238b2692-2460-4bad-93b5-b6def8c3b821" type="radio">
            <RadioButton
              className="utrecht-form-field__input"
              id="238b2692-2460-4bad-93b5-b6def8c3b821"
              name="828aa90e-0e99-4db9-a5e5-d39f689cf7b2"
              value="email"
            />
            E-mail
          </FormLabel>
        </Paragraph>
      </FormField>
      <FormField type="radio">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel htmlFor="6a1b86d8-f5d2-4852-9f95-b6690ac3d0e1" type="radio">
            <RadioButton
              className="utrecht-form-field__input"
              id="6a1b86d8-f5d2-4852-9f95-b6690ac3d0e1"
              name="828aa90e-0e99-4db9-a5e5-d39f689cf7b2"
              value="letter"
            />
            Brief
          </FormLabel>
        </Paragraph>
      </FormField>
    </Fieldset>
  ),
};

export const RadioButtonGroupWithDescription: Story = {
  render: () => (
    <Fieldset aria-describedby="d7218515-bf54-45c1-ba57-a72af5d7fd42-description">
      <FieldsetLegend>Hoe wil je dat wij contact opnemen?</FieldsetLegend>
      <FormFieldDescription
        className="utrecht-form-field-description--distanced"
        id="d7218515-bf54-45c1-ba57-a72af5d7fd42-description"
      >
        Kies één opties.
      </FormFieldDescription>
      <FormField type="radio">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel htmlFor="4e054ee1-799e-4608-9055-19d3fc0b88e8" type="radio">
            <RadioButton
              className="utrecht-form-field__input"
              id="4e054ee1-799e-4608-9055-19d3fc0b88e8"
              name="828aa90e-0e99-4db9-a5e5-d39f689cf7b4"
              value="phone"
            />
            Telefoon
          </FormLabel>
        </Paragraph>
      </FormField>
      <FormField type="radio">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel htmlFor="238b2692-2460-4bad-93b5-b6def8c3b829" type="radio">
            <RadioButton
              className="utrecht-form-field__input"
              id="238b2692-2460-4bad-93b5-b6def8c3b829"
              name="828aa90e-0e99-4db9-a5e5-d39f689cf7b4"
              value="email"
            />
            E-mail
          </FormLabel>
        </Paragraph>
      </FormField>
      <FormField type="radio">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel htmlFor="6a1b86d8-f5d2-4852-9f95-b6690ac3d0e5" type="radio">
            <RadioButton
              className="utrecht-form-field__input"
              id="6a1b86d8-f5d2-4852-9f95-b6690ac3d0e5"
              name="828aa90e-0e99-4db9-a5e5-d39f689cf7b4"
              value="letter"
            />
            Brief
          </FormLabel>
        </Paragraph>
      </FormField>
    </Fieldset>
  ),
};

export const SelectInput: Story = {
  render: () => (
    <FormField className="denhaag-form-field--flex">
      <FormLabel>Options</FormLabel>
      <Select>
        <SelectOption value="">Select an option</SelectOption>
        <SelectOption value="1">Option #1</SelectOption>
        <SelectOption value="2">Option #2</SelectOption>
        <SelectOption value="3">Option #3</SelectOption>
        <SelectOption value="4">Option #4</SelectOption>
      </Select>
    </FormField>
  ),
};

export const SelectMultipleInput: Story = {
  render: () => (
    <FormField className="denhaag-form-field--flex">
      <FormLabel>Options</FormLabel>
      <Select multiple>
        <SelectOption value="">Select an option</SelectOption>
        <SelectOption value="1">Option #1</SelectOption>
        <SelectOption value="2">Option #2</SelectOption>
        <SelectOption value="3">Option #3</SelectOption>
        <SelectOption value="4">Option #4</SelectOption>
      </Select>
    </FormField>
  ),
};
