import React, { Key, ReactNode } from 'react';
import { StepMarker, StepMarkerConnector } from '@gemeente-denhaag/step-marker';
import { Step } from './Step';
import { StepList, StepListProps } from './StepList';
import { StepHeader } from './StepHeader';
import { StepHeading } from './StepHeading';
import { StepBody } from './StepBody';
import { StepMeta } from './StepMeta';

import './index.scss';

interface StepProps {
  id: Key;
  title: ReactNode;
  marker: ReactNode;
  meta?: ReactNode;
}

interface ProcedureStepProps {
  step: StepProps;
  nextStep?: StepProps;
}
const ProcedureStep = ({ step, nextStep }: ProcedureStepProps) => {
  return (
    <Step>
      <StepHeader>
        <StepMarker>{step.marker}</StepMarker>
        <StepHeading>{step.title}</StepHeading>
      </StepHeader>
      <StepBody>
        {nextStep && <StepMarkerConnector from="main" to={'main'} />}
        {step.meta && <StepMeta>{step.meta}</StepMeta>}
      </StepBody>
    </Step>
  );
};

export interface ProcedureProps extends StepListProps {
  steps: StepProps[];
}

export const Procedure = ({ steps = [] }: ProcedureProps) => {
  return (
    <StepList>
      {steps.map((step, index) => {
        return <ProcedureStep key={step.id} step={step} nextStep={steps[index + 1]} />;
      })}
    </StepList>
  );
};

export default Procedure;
