import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  // contained
  contained: {
    backgroundColor: 'var(--mdh-button-background-color)',
    fontFamily: 'var(--mdh-button-font-family)',
    '&$containedPrimary': {
      color: 'var(--mdh-button-background-color)'
    },
    '&$containedSecondary': {
      color: 'var(--mdh-button-secondary-background-color)'
    },
    '&:hover': {
      backgroundColor: 'var(--mdh-button-hover-background-color)',
      color: 'var(--mdh-button-hover-text-color)'
    },
    '&:focus': {
      backgroundColor: 'var(--mdh-button-focus-background-color)',
      color: 'var(--mdh-button-focus-text-color)'
    },
    '&$disabled': {
      backgroundColor: 'var(--mdh-button-disabled-background-color)'
    }
  },
  containedPrimary: {},
  containedSecondary: {},
  disabled: {},
  // outlined
  outlined: {
    borderRightColor: 'var(--mdh-button-background-color)',
    borderLeftColor: 'var(--mdh-button-background-color)',
    borderTopColor: 'var(--mdh-button-background-color)',
    borderBottomColor: 'var(--mdh-button-background-color)',
    '&:hover': {
      borderRightColor: 'var(--mdh-button-hover-background-color)',
      borderLeftColor: 'var(--mdh-button-hover-background-color)',
      borderTopColor: 'var(--mdh-button-hover-background-color)',
      borderBottomColor: 'var(--mdh-button-hover-background-color)'
    },
    '&:focus': {
      borderRightColor: 'var(--mdh-button-focus-background-color)',
      borderLeftColor: 'var(--mdh-button-focus-background-color)',
      borderTopColor: 'var(--mdh-button-focus-background-color)',
      borderBottomColor: 'var(--mdh-button-focus-background-color)'
    },

    '&$outlinedPrimary': {
      color: 'var(--mdh-button-background-color)'
    },
    '&$outlinedSecondary': {
      color: 'var(--mdh-button-secondary-background-color)'
    }
  },
  outlinedPrimary: {},
  outlinedSecondary: {},
  // text
  text: {
    '&$disabled': {
      backgroundColor: 'var(--mdh-button-disabled-background-color)'
    },
    '&:hover': {
      color: 'var(--mdh-button-disabled-background-color)'
    },
    '&:focus': {
      color: 'var(--mdh-button-disabled-background-color)'
    }
  },
  textPrimary: {
    color: 'var(--mdh-button-background-color)'
  },
  textSecondary: {
    color: 'var(--mdh-button-secondary-background-color)'
  }
})
