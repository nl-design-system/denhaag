import React from 'react';
import { Form } from 'react-formio';
import { merge } from 'lodash';

export type FormConfiguration = { type: string; components: { type: string; key: string; label: string }[] };

const RenderFormioForm: React.FC<{ form: FormConfiguration }> = ({ form }) => {
  return (
    <Form
      form={form}
      submission={{}}
      options={{
        noAlerts: true,
        language: 'nl',
        baseUrl: '',
        evalContext: {
          ofPrefix: 'openforms-',
          requiredFieldsWithAsterisk: false,
        },
        ofContext: {
          submissionUuid: '426c8d33-6dcb-4578-8208-f17071a4aebe',
        },
      }}
    />
  );
};

type SingleFormioComponentProps = {
  type: string;
  key: string;
  label: string;
  extraComponentProperties?: unknown;
};

export const SingleFormioComponent: React.FC<SingleFormioComponentProps> = ({
  type,
  key,
  label,
  extraComponentProperties = {},
}) => {
  const component = merge({ type, key, label }, extraComponentProperties);
  return <RenderFormioForm form={{ type: 'form', components: [component] }} />;
};
