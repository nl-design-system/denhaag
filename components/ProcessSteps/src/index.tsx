import React from 'react';
import { Step } from './Step';
import { StepExpandedIcon } from './StepExpandedIcon';
import { StepList, StepListProps } from './StepList';
import { StepSection } from './StepSection';
import { StepHeader } from './StepHeader';
import { StepHeading } from './StepHeading';
import { StepMarker } from './StepMarker';
import { SubStep } from './SubStep';
import { SubStepList } from './SubStepList';
import { SubStepMarker } from './SubStepMarker';
import { SubStepHeading } from './SubStepHeading';

import './index.scss';

export interface ProcessStepsProps extends StepListProps {}

/**
 * The `Timeline` displays a progress through a sequence by breaking it up into
 * multiple logical and numbered steps. Use the timeline when a series of
 * information needs to be ordered by time (ascending or descending). It
 * represents the steps in a process in a chronological order. This process is
 * part of, for example, a request that the user has made.
 *
 * @param props The properties of a ProcessSteps component.
 * @constructor Constructs an instance of ProcessSteps.
 */
export const ProcessSteps: React.FC<ProcessStepsProps> = ({ ...props }: ProcessStepsProps) => {
  return (
    <StepList {...props}>
      <Step checked expanded>
        <StepSection>
          <StepHeader>
            <StepMarker>
              <div>1</div>
            </StepMarker>
            <StepHeading>Deelname aan geluidsonderzoek</StepHeading>
            <StepExpandedIcon />
          </StepHeader>
        </StepSection>
        <SubStepList>
          <SubStep>
            <SubStepMarker />
            <SubStepHeading>Aanmelding ontvangen</SubStepHeading>
          </SubStep>
        </SubStepList>
      </Step>
      <Step current expanded>
        <StepSection>
          <StepHeader>
            <StepMarker>
              <div>2</div>
            </StepMarker>
            <StepHeading>Onderzoek naar geluidsoverlast</StepHeading>
            <StepExpandedIcon />
          </StepHeader>
        </StepSection>
        <SubStepList>
          <SubStep>
            <SubStepMarker />
            <SubStepHeading>Afspraak meten geluidsoverlast gemaakt</SubStepHeading>
          </SubStep>
          <SubStep>
            <SubStepMarker />
            <SubStepHeading>Geluidsoverlast gemeten</SubStepHeading>
          </SubStep>
          <SubStep>
            <SubStepMarker />
            <SubStepHeading>Onderzoek resultaten verwerkt</SubStepHeading>
          </SubStep>
        </SubStepList>
      </Step>
      <Step>
        <StepSection>
          <StepHeader>
            <StepMarker>3</StepMarker>
            <StepHeading>Uitvoeren van maatregelen</StepHeading>
          </StepHeader>
        </StepSection>
      </Step>
      <Step>
        <StepSection>
          <StepHeader>
            <StepMarker>4</StepMarker>
            <StepHeading>Maatregelen zijn uitgevoerd</StepHeading>
          </StepHeader>
        </StepSection>
      </Step>
    </StepList>
  );
};

export default ProcessSteps;

export * from './Step';
export * from './StepExpandedIcon';
export * from './StepHeader';
export * from './StepHeading';
export * from './StepHeadingLabel';
export * from './StepList';
export * from './StepMarker';
export * from './StepSection';
export * from './SubStep';
export * from './SubStepHeading';
export * from './SubStepList';
export * from './SubStepMarker';
export * from './StepExpandedIcon';
