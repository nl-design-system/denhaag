import { makeStyles } from '@material-ui/core/styles'
import './design-tokens.css'

export const useStyles = makeStyles({
  // unchecked
  disabled: {
    color: 'var(--mdh-switch-disabled-colour)',
    '&track': {
      color: 'var(--mdh-switch-disabled-colour)'
    },
  },
  colorPrimary: {
    color: 'var(--mdh-switch-primary-colour)',
    '&track': {
      backgroundColor: 'var(--mdh-switch-unchecked-track-background-colour)'
    },
  },
  colorSecondary: {
    color: 'var(--mdh-switch-secondary-colour)',
    'track': {
      backgroundColor: 'var(--mdh-switch-unchecked-track-background-colour)'
    },
  },
  track: {},
  // checked
  checked: {
    '&$colorPrimary': {
      color: 'var(--mdh-switch-secondary-colour)',
      '& + $track': {
        backgroundColor: 'var(--mdh-switch-checked-track-background-colour)'
      }
    },
    '&$colorSecondary': {
      color: 'var(--mdh-switch-primary-colour)',
      '& + $track': {
        backgroundColor: 'var(--mdh-switch-checked-track-background-colour)'
      }
    },
    '& + $track': {
      backgroundColor: 'var(--mdh-switch-checked-track-background-colour)'
    }
  }
})
