import { makeStyles } from '@material-ui/core/styles'
import './design-tokens.css'

export const useStyles = makeStyles({
  disabled: {
    color: 'var(--mdh-radio-disabled-colour)'
  },
  colorPrimary: {
    color: 'var(--mdh-radio-primary-colour)',
    '&:hover': {
      color: 'var(--mdh-radio-hover-colour)'
    },
    '&:focus': {
      color: 'var(--mdh-radio-hover-colour)'
    }
  },
  colorSecondary: {
    color: 'var(--mdh-radio-secondary-colour)',
    '&:hover': {
      color: 'var(--mdh-radio-hover-colour)'
    },
    '&:focus': {
      color: 'var(--mdh-radio-hover-colour)'
    }
  },
  colorDefault: {
    color: 'var(--mdh-radio-hover-colour)'
  },
  //checked
  checked: {
    '&$colorPrimary': {
      color: 'var(--mdh-radio-focus-colour)',
    },
    '&$colorSecondary': {
      color: 'var(--mdh-radio-focus-colour)',
    },
    '&$colorDefault': {
      color: 'var(--mdh-radio-disabled-colour)',
    }
  }
})
