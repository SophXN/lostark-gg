import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { AdvancedClass } from '../App';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
});

interface ClassProps {
  currentClass: AdvancedClass;
  className?: string;
}

const ClassCard = (props: ClassProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Card className={`${classes.root}`} onClick={() => {}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${props.currentClass.art}`}
          title={`${props.currentClass.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.currentClass.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ClassCard;
