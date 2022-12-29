import React, { Key, ReactNode, useState } from 'react';
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
import StepLine from './StepLine';

export type StepStatus = 'checked' | 'not-checked' | 'current' | 'warning';

interface StepProps {
  key: Key;
  title: string;
  marker?: Key;
  date?: string;
  meta?: ReactNode;
  steps?: Omit<StepProps, 'steps' | 'marker' | 'key'>[];
  status?: StepStatus;
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
  nextStep?: StepProps;
  toggleExpanded: () => void;
}

const ProcessStep = ({ step, nextStep, expanded = false, toggleExpanded }: ProcessStepProps) => {
  const lineAppearance =
    nextStep &&
    (nextStep.status === 'checked' ||
    nextStep.status === 'current' ||
    (expanded && step.steps?.[0].status === 'checked')
      ? 'checked'
      : nextStep.status === 'warning' || (expanded && step.steps?.[0].status === 'warning')
      ? 'warning'
      : 'not-checked');

  return (
    <Step appearance={step.status} current={step.status === 'current'} collapsed={!!step.steps?.length && !expanded}>
      {step.steps?.length ? (
        <>
          <StepHeader aria-controls={`${step.key}--details`} expanded={expanded} onClick={toggleExpanded}>
            <StepMarker appearance={step.status}>{step.marker || step.key}</StepMarker>
            <StepHeading appearance={step.status}>{step.title}</StepHeading>
          </StepHeader>
          <StepBody>
            {nextStep && <StepLine from="main" to="main" appearance={lineAppearance} />}
            {step.meta && <StepMeta>{step.meta}</StepMeta>}
            {step.date && <StepMeta date>{step.date}</StepMeta>}
          </StepBody>
          <StepDetails id={`${step.key}--details`} expanded={expanded}>
            <StepList>
              {step.steps?.map((substep, index, substeps) => {
                const nextSubStep = substeps[index + 1];
                const subLineAppearance = nextSubStep?.status || nextStep?.status;
                return (
                  <SubStep key={index}>
                    <SubStepMarker appearance={substep.status} />
                    <SubStepHeading>{substep.title}</SubStepHeading>
                    {(nextSubStep || nextStep) && (
                      <StepLine from="nested" to={nextSubStep ? 'nested' : 'main'} appearance={subLineAppearance} />
                    )}
                  </SubStep>
                );
              })}
            </StepList>
          </StepDetails>
        </>
      ) : (
        <>
          <StepHeader>
            <StepMarker appearance={step.status}>{step.marker || step.key}</StepMarker>
            <StepHeading appearance={step.status}>{step.title}</StepHeading>
          </StepHeader>
          <StepBody>
            {nextStep && <StepLine from="main" to="main" appearance={lineAppearance} />}
            {step.meta && <StepMeta>{step.meta}</StepMeta>}
            {step.date && <StepMeta date>{step.date}</StepMeta>}
          </StepBody>
        </>
      )}
    </Step>
  );
};

const toggleState = (key: Key, collection: Key[], setCollection: React.Dispatch<React.SetStateAction<React.Key[]>>) => {
  if (collection.includes(key)) {
    setCollection(collection.filter((item) => item !== key));
  } else {
    setCollection([...collection, key]);
  }
};

export const ProcessSteps = ({
  steps = [],
  expandedSteps: initialExpanded = [],
  disabledSteps = [],
}: ProcessStepsProps) => {
  const [expandedSteps, setExpandedSteps] = useState(initialExpanded);

  return (
    <StepList>
      {steps.map((step, index) => {
        return (
          <ProcessStep
            key={step.key}
            step={step}
            expanded={expandedSteps.includes(step.key)}
            disabled={disabledSteps.includes(step.key)}
            nextStep={steps[index + 1]}
            toggleExpanded={() => toggleState(step.key, expandedSteps, setExpandedSteps)}
          />
        );
      })}
    </StepList>
  );
};

export default ProcessSteps;

export * from './Step';
export * from './StepHeader';
export * from './StepHeading';
export * from './StepList';
export * from './StepMarker';
export * from './SubStep';
export * from './SubStepHeading';
export * from './SubStepMarker';
export * from './StepMeta';
