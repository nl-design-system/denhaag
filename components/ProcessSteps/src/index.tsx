import React, { Key, ReactNode, useState } from 'react';
import { Step } from './Step';
import { StepList, StepListProps } from './StepList';
import { StepHeader } from './StepHeader';
import { StepHeading } from './StepHeading';
import { SubStep } from './SubStep';
import { SubStepHeading } from './SubStepHeading';
import { AlertTriangleIcon, CheckedIcon, CloseIcon } from '@gemeente-denhaag/icons';
import { StepMarker } from '@gemeente-denhaag/step-marker';

import './index.scss';
import { StepBody } from './StepBody';
import { StepMeta } from './StepMeta';
import { StepDetails } from './StepDetails';
import StepLine from './StepLine';

export type StepStatus = 'checked' | 'not-checked' | 'current' | 'warning' | 'error';

interface StepProps {
  id: Key;
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
        aria-controls={`${step.id}--details`}
        expanded={expanded}
        collapsible={collapsible}
        onClick={toggleExpanded}
      >
        <StepMarker appearance={step.status}>
          {step.status === 'checked' ? (
            <CheckedIcon />
          ) : step.status === 'warning' ? (
            <AlertTriangleIcon />
          ) : step.status === 'error' ? (
            <CloseIcon />
          ) : (
            step.marker
          )}
        </StepMarker>
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
        <StepDetails id={`${step.id}--details`} expanded={collapsible ? expanded : true}>
          <StepList>
            {step.steps?.map((substep, index, substeps) => {
              const nextSubStep = substeps[index + 1];
              const nextStatus = nextSubStep?.status || nextStep?.status;
              return (
                <SubStep key={index}>
                  <StepMarker appearance={substep.status} nested>
                    {substep.status === 'checked' && <CheckedIcon />}
                  </StepMarker>
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
            key={step.id}
            step={step}
            expanded={expandedSteps.includes(step.id)}
            disabled={disabledSteps.includes(step.id)}
            nextStep={steps[index + 1]}
            toggleExpanded={() => toggleState(step.id, expandedSteps, setExpandedSteps)}
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
export * from './SubStep';
export * from './SubStepHeading';
export * from './StepMeta';
