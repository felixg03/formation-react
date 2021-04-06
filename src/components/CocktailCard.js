import React from 'react';
import { MOCK } from '../assets/mock';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 400,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


export default function CocktailCard(props) {

    const [myself, setMyself] = React.useState(props.cocktail);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.root}>
            <CardHeader

                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }

                title={myself.name}
                />
              
            <CardMedia 
              className={classes.media}
              image={myself.picture}
              title={myself.name}
            />

            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {myself.description}
              </Typography>
            </CardContent>


            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
              <Button size="small" onClick={() => props.handleDelete(myself)}>DELETE</Button>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>

                <Typography paragraph><b>Ingredients:</b></Typography>
                <Typography paragraph>
                  <ul>
                    {myself.ingredients.map( ingredient =>
                      <li>
                        {ingredient.quantity} {ingredient.unit} of {ingredient.name}
                      </li>
                    )}
                  </ul>
                </Typography>
                <br />
                <Typography paragraph><b>Instructions:</b></Typography>
                <Typography paragraph>
                  <ul>
                    {myself.instructions.map( instruction =>
                      <li>
                        {instruction}
                      </li>
                    )}
                  </ul>
                </Typography>

              </CardContent>
            </Collapse>

        </Card>
    );
}


CocktailCard.propTypes = {
  cocktail: PropTypes.object.isRequired
}