import React from 'react';
import { Meta } from '@storybook/react';
import { createStyles, makeStyles, Theme, MenuItem } from '@material-ui/core';
import pkg from '../package.json';
import Select, { SelectProps } from './index';
import FormControl from '../../FormControl';
import InputLabel from '../../InputLabel';

export default {
  title: 'React/Input/Select',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  component: Select,
} as Meta;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

export function DefaultSelect(props: SelectProps): React.ReactElement {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="default-select-label">Amount</InputLabel>
      <Select labelId="default-select-label" {...props}>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
    </FormControl>
  );
}

export function NativeSelect(props: SelectProps): React.ReactElement {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="default-select-label">Amount</InputLabel>
      <Select native labelId="default-select-label" {...props}>
        <option aria-label="None" value="" />
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </Select>
    </FormControl>
  );
}
