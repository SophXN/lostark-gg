import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { AdvancedClass } from '../App';
import SkillBuilder from './SkillBuilder';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
});

interface ClassProps {
  advancedClass: AdvancedClass;
  chooseClass: (currentClass: AdvancedClass) => void;
  className?: string;
}

const ClassCard = (props: ClassProps): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const selectClass = (): void => {
    history.push(`/classes/new/${props.advancedClass.name}`);
    props.chooseClass(props.advancedClass)
  };
  return (
    <Router>
      <Card className={`${classes.root}`} onClick={selectClass}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${props.advancedClass.art}`}
            title={`${props.advancedClass.name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.advancedClass.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Router>
  );
};

export default ClassCard;
