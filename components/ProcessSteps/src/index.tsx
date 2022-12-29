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

export type StepStatus = 'checked' | 'not-checked' | 'current' | 'warning' | 'error';

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
  collapsible?: boolean;
}

interface ProcessStepProps {
  step: StepProps;
  expanded?: boolean;
  disabled?: boolean;
  nextStep?: StepProps;
  toggleExpanded: () => void;
  collapsible?: boolean;
}

interface getLineAppearanceProps {
  stepStatus?: StepStatus;
  nextStepStatus?: StepStatus;
  expanded?: boolean;
}

const getLineAppearance = ({
  stepStatus = 'not-checked',
  nextStepStatus = 'not-checked',
  expanded = false,
}: getLineAppearanceProps) => {
  if (expanded && stepStatus === 'checked' && nextStepStatus === 'error') {
    return 'checked';
  } else if (expanded && stepStatus === 'checked' && nextStepStatus === 'warning') {
    return 'checked';
  } else if (expanded && stepStatus === 'current' && nextStepStatus === 'error') {
    return 'checked';
  } else if (expanded && stepStatus === 'current' && nextStepStatus === 'warning') {
    return 'checked';
  } else if (nextStepStatus === 'not-checked') {
    return 'not-checked';
  }
  return stepStatus;
};

const ProcessStep = ({ step, nextStep, expanded = false, toggleExpanded, collapsible = true }: ProcessStepProps) => {
  const nextStatus = expanded && step.steps?.[0] ? step.steps[0].status : nextStep?.status;

  return (
    <Step appearance={step.status} current={step.status === 'current'}>
      <StepHeader
        aria-controls={`${step.key}--details`}
        expanded={expanded}
        collapsible={collapsible}
        onClick={toggleExpanded}
      >
        <StepMarker appearance={step.status}>{step.marker || step.key}</StepMarker>
        <StepHeading appearance={step.status}>{step.title}</StepHeading>
      </StepHeader>
      <StepBody>
        {nextStep && (
          <StepLine
            from="main"
            to="main"
            appearance={getLineAppearance({ stepStatus: step.status, nextStepStatus: nextStatus, expanded })}
          />
        )}
        {step.meta && <StepMeta>{step.meta}</StepMeta>}
        {step.date && <StepMeta date>{step.date}</StepMeta>}
      </StepBody>
      {step.steps?.length && (
        <StepDetails id={`${step.key}--details`} expanded={collapsible ? expanded : true}>
          <StepList>
            {step.steps?.map((substep, index, substeps) => {
              const nextSubStep = substeps[index + 1];
              const nextStatus = nextSubStep?.status || nextStep?.status;
              return (
                <SubStep key={index}>
                  <SubStepMarker appearance={substep.status} />
                  <SubStepHeading>{substep.title}</SubStepHeading>
                  {(nextSubStep || nextStep) && (
                    <StepLine
                      from="nested"
                      to={nextSubStep ? 'nested' : 'main'}
                      appearance={getLineAppearance({
                        stepStatus: substep.status,
                        nextStepStatus: nextStatus,
                        expanded,
                      })}
                    />
                  )}
                </SubStep>
              );
            })}
          </StepList>
        </StepDetails>
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
  collapsible = true,
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
            collapsible={collapsible && !!step.steps?.length && step.steps[0].status !== 'error'}
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
