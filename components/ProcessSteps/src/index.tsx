import React, { Key, ReactNode } from 'react';
import { Step } from './Step';
import { StepList, StepListProps } from './StepList';
import { StepHeader } from './StepHeader';
import { StepHeading } from './StepHeading';
import { StepMarker } from './StepMarker';
import { SubStep } from './SubStep';
import { SubStepMarker } from './SubStepMarker';
import { SubStepHeading } from './SubStepHeading';

import './index.scss';
import { StepBody } from './StepBody';
import { StepMeta } from './StepMeta';
import { StepDetails } from './StepDetails';

interface StepProps {
  key: Key;
  title: string;
  marker?: Key;
  date?: string;
  meta?: ReactNode;
  steps?: Omit<StepProps, 'steps' | 'marker' | 'key'>[];
  status?: 'checked' | 'unchecked' | 'current' | 'warning';
}

export interface ProcessStepsProps extends StepListProps {
  steps: StepProps[];
  expandedSteps?: Key[];
  disabledSteps?: Key[];
}

interface ProcessStepProps {
  step: StepProps;
  expanded?: boolean;
  disabled?: boolean;
}

const ProcessStep = ({ step, expanded = false }: ProcessStepProps) => {
  const expandable = !!step.steps?.length;

  return (
    <Step checked={step.status === 'checked'} current={step.status === 'current'} collapsed={expandable && !expanded}>
      {expandable ? (
        <>
          <StepHeader aria-controls={`${step.key}--details`}>
            <StepMarker>{step.marker || step.key}</StepMarker>
            <StepHeading>{step.title}</StepHeading>
          </StepHeader>
          <StepBody>
            {step.meta && <StepMeta>{step.meta}</StepMeta>}
            {step.date && <StepMeta date>{step.date}</StepMeta>}
            <StepDetails id={`${step.key}--details`}>
              <StepList>
                {step.steps?.map((substep, index) => (
                  <SubStep key={index}>
                    <SubStepMarker />
                    <SubStepHeading>{substep.title}</SubStepHeading>
                  </SubStep>
                ))}
              </StepList>
            </StepDetails>
          </StepBody>
        </>
      ) : (
        <>
          <StepHeader>
            <StepMarker>{step.marker || step.key}</StepMarker>
            <StepHeading>{step.title}</StepHeading>
          </StepHeader>
          <StepBody>
            {step.meta && <StepMeta>{step.meta}</StepMeta>}
            {step.date && <StepMeta date>{step.date}</StepMeta>}
          </StepBody>
        </>
      )}
    </Step>
  );
};

export const ProcessSteps = ({ steps = [], expandedSteps = [], disabledSteps = [] }: ProcessStepsProps) => (
  <StepList>
    {steps.map((step) => (
      <ProcessStep
        key={step.key}
        step={step}
        expanded={expandedSteps.includes(step.key)}
        disabled={disabledSteps.includes(step.key)}
      />
    ))}
  </StepList>
);

export default ProcessSteps;

export * from './Step';
export * from './StepExpandedIcon';
export * from './StepHeader';
export * from './StepHeading';
export * from './StepHeadingLabel';
export * from './StepList';
export * from './StepMarker';
export * from './SubStep';
export * from './SubStepHeading';
export * from './SubStepMarker';
export * from './StepMeta';
