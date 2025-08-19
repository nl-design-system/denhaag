import React, { Key, ReactNode, useState } from 'react';
import { Step, StepStatus } from './Step';
import { StepList, StepListProps } from './StepList';
import { StepHeader } from './StepHeader';
import { StepHeading } from './StepHeading';
import { SubStep } from './SubStep';
import { SubStepHeading } from './SubStepHeading';
import { AlertTriangleIcon, CheckedIcon, CloseIcon } from '@gemeente-denhaag/icons';
import { StepMarker, StepMarkerConnector } from '@gemeente-denhaag/step-marker';

import './index.scss';
import { StepBody } from './StepBody';
import { StepMeta } from './StepMeta';
import { StepDetails } from './StepDetails';
import { StepHeaderToggle } from './StepHeaderToggle';

interface StepProps {
  id: Key;
  title: ReactNode;
  marker?: ReactNode;
  date?: ReactNode;
  meta?: ReactNode;
  steps?: Omit<StepProps, 'steps' | 'marker' | 'key'>[];
  status?: StepStatus;
  collapsible?: boolean;
}

interface getLineAppearanceProps {
  stepStatus?: StepStatus;
  nextStepStatus?: StepStatus;
  expanded?: boolean;
}

const getLineAppearance = ({ stepStatus = 'not-checked', nextStepStatus = 'not-checked' }: getLineAppearanceProps) => {
  if (stepStatus === 'checked' && nextStepStatus === 'error') {
    return 'checked';
  } else if (stepStatus === 'checked' && nextStepStatus === 'warning') {
    return 'checked';
  } else if (stepStatus === 'current' && nextStepStatus === 'error') {
    return 'checked';
  } else if (stepStatus === 'current' && nextStepStatus === 'warning') {
    return 'checked';
  } else if (nextStepStatus === 'not-checked') {
    return 'not-checked';
  }
  return stepStatus;
};

const canExpand = (step: StepProps) => !!step.steps?.length;

interface StatusStepProps {
  step: StepProps;
  expanded?: boolean;
  disabled?: boolean;
  nextStep?: StepProps;
  toggleExpanded: false | (() => void);
}
const StatusStep = ({ step, nextStep, expanded = true, toggleExpanded }: StatusStepProps) => {
  const nextStatus = (expanded && step.steps?.[0]?.status) || nextStep?.status;
  return (
    <Step appearance={step.status} current={step.status === 'current'}>
      <StepHeader>
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
        {toggleExpanded && canExpand(step) ? (
          <StepHeaderToggle ariaControls={`${step.id}--details`} expanded={expanded} onClick={toggleExpanded}>
            <StepHeading appearance={step.status}>{step.title}</StepHeading>
          </StepHeaderToggle>
        ) : (
          <StepHeading appearance={step.status}>{step.title}</StepHeading>
        )}
      </StepHeader>
      <StepBody>
        {nextStep && (
          <StepMarkerConnector
            from="main"
            to={expanded ? 'nested' : 'main'}
            appearance={getLineAppearance({
              stepStatus: step.status,
              nextStepStatus: nextStatus,
            })}
          />
        )}
        {step.meta && <StepMeta>{step.meta}</StepMeta>}
        {step.date && <StepMeta date>{step.date}</StepMeta>}
      </StepBody>
      {step.steps?.length && (
        <StepDetails id={`${step.id}--details`} collapsed={!expanded}>
          <StepList>
            {step.steps?.map((substep, index, substeps) => {
              const nextSubStep = substeps[index + 1];
              const nextStatus = nextSubStep?.status || nextStep?.status;
              return (
                <SubStep key={index}>
                  <StepHeader nested>
                    <StepMarker appearance={substep.status} nested>
                      {substep.status === 'checked' && <CheckedIcon />}
                    </StepMarker>
                    <SubStepHeading>{substep.title}</SubStepHeading>
                  </StepHeader>
                  {(nextSubStep || nextStep) && (
                    <StepMarkerConnector
                      from="nested"
                      to={nextSubStep ? 'nested' : 'main'}
                      appearance={getLineAppearance({
                        stepStatus: substep.status,
                        nextStepStatus: nextStatus,
                      })}
                    />
                  )}
                  <StepMeta nested>{substep.date}</StepMeta>
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

export interface StatusProps extends StepListProps {
  steps: StepProps[];
  expandedSteps?: Key[];
  disabledSteps?: Key[];
  collapsible?: boolean;
}

export const Status = ({
  steps = [],
  expandedSteps: initialExpanded = [],
  disabledSteps = [],
  collapsible = false,
}: StatusProps) => {
  const [expandedSteps, setExpandedSteps] = useState(initialExpanded);

  return (
    <StepList>
      {steps.map((step, index) => {
        const collapsibleStep = collapsible && step.collapsible !== false;
        return (
          <StatusStep
            key={step.id}
            step={step}
            expanded={collapsibleStep ? expandedSteps.includes(step.id) : true}
            disabled={disabledSteps.includes(step.id)}
            nextStep={steps[index + 1]}
            toggleExpanded={
              collapsibleStep &&
              (() => {
                toggleState(step.id, expandedSteps, setExpandedSteps);
              })
            }
          />
        );
      })}
    </StepList>
  );
};
