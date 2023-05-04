import Status from './Status';

/*
 As some other Design Systems already depend on ProcessSteps
 Let's export Status as default and ProcessSteps 
 And mark it as deprecated
 */

/**
 * @deprecated `ProcessSteps` is the component group. Use `import { Status }` instead.
 */
const ProcessSteps = Status;

export { ProcessSteps };
export default ProcessSteps;

export * from './Status';
export * from './Step';
export * from './StepHeader';
export * from './StepHeading';
export * from './StepList';
export * from './SubStep';
export * from './SubStepHeading';
export * from './StepMeta';
