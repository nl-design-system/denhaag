import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FormField from '@gemeente-denhaag/form-field';
import FormLabel from '@gemeente-denhaag/form-label';
import Textbox from '@gemeente-denhaag/textfield';
import Checkbox from '@gemeente-denhaag/checkbox';
import readme from '../../../../components/FormField/README.md';
import FormFieldDescription from '@gemeente-denhaag/form-field-description';
import FormFieldErrorMessage from '@gemeente-denhaag/form-field-error-message';
import Fieldset, { FieldsetLegend } from '@gemeente-denhaag/form-fieldset';
import { Paragraph } from '@gemeente-denhaag/typography';
import RadioButton from '@gemeente-denhaag/radio';

const meta = {
  id: 'react-input-form-field',
  title: 'React/Input/Form Field',
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
      <FormLabel>Username</FormLabel>
      <Textbox placeholder="Placeholder" />
    </FormField>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <FormField>
      <FormLabel>Username</FormLabel>
      <FormFieldDescription>Vul hier uw username in</FormFieldDescription>
      <Textbox placeholder="Placeholder" />
    </FormField>
  ),
};

export const Invalid: Story = {
  render: () => (
    <FormField invalid>
      <FormLabel>Username</FormLabel>
      <FormFieldDescription>Description</FormFieldDescription>
      <Textbox placeholder="Placeholder" invalid />
      <FormFieldErrorMessage>Error message</FormFieldErrorMessage>
    </FormField>
  ),
};

export const SingleCheckbox: Story = {
  render: () => (
    <FormField>
      <FormLabel type="checkbox">
        <Checkbox name="consent" />
        Ik ga akkoord met de algemene voorwaarden
      </FormLabel>
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
