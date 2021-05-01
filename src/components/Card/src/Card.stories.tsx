import React from "react";
import { Meta, Story } from "@storybook/react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Card, { CardProps } from ".";
import CardActions from "../../CardActions";
import CardContent from "../../CardContent";
import CardHeader from "../../CardHeader";
import Typography from "../../Typography";
import Avatar from "../../Avatar";
import IconButton from "../../IconButton";
import pkg from "../package.json";

export default {
  title: 'Components/Surfaces/Card',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args: CardProps) => (
  <Card {...args}>
    <CardHeader
      avatar={<Avatar aria-label="recipe">R</Avatar>}
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
        frozen peas along with the mussels, if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <IconButton aria-label="show more">
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
  </Card>
);

// language=JS
const defaultCode = `
<Card>
  <CardHeader
    avatar={<Avatar aria-label='recipe'>R</Avatar>}
    action={
      <IconButton aria-label='settings'>
        <MoreVertIcon/>
      </IconButton>
    }
    title='Shrimp and Chorizo Paella'
    subheader='September 14, 2016'>
    <CardContent>
      <Typography variant='body2' color='textSecondary' component='p'>
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
        frozen peas along with the mussels, if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label='add to favorites'>
        <FavoriteIcon/>
      </IconButton>
      <IconButton aria-label='share'>
        <ShareIcon/>
      </IconButton>
      <IconButton aria-label='show more'>
        <ExpandMoreIcon/>
      </IconButton>
    </CardActions>
  </CardHeader>
</Card>
`;

/**
 * Implementation of Card
 */
export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      // language=JS
      code: defaultCode,
    },
  },
};

// language=JS
const raisedCode = `
<Card raised>
  <CardHeader
    avatar={<Avatar aria-label='recipe'>R</Avatar>}
    action={
      <IconButton aria-label='settings'>
        <MoreVertIcon/>
      </IconButton>
    }
    title='Shrimp and Chorizo Paella'
    subheader='September 14, 2016'>
    <CardContent>
      <Typography variant='body2' color='textSecondary' component='p'>
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
        cup of
        frozen peas along with the mussels, if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label='add to favorites'>
        <FavoriteIcon/>
      </IconButton>
      <IconButton aria-label='share'>
        <ShareIcon/>
      </IconButton>
      <IconButton aria-label='show more'>
        <ExpandMoreIcon/>
      </IconButton>
    </CardActions>
  </CardHeader>
</Card>
`;

/**
 * Raised variant of Card component
 */
export const Raised = Template.bind({});
Raised.args = {
  raised: true,
};
Raised.parameters = {
  docs: {
    source: {
      // language=JS
      code: raisedCode,
    },
  },
};
