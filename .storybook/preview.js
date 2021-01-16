import { muiTheme } from "storybook-addon-material-ui";
import { bonkTheme } from "../src/themes/BonkTheme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
}

export const decorators = [
  muiTheme([bonkTheme])
]

// storyboink
