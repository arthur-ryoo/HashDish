import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '0.5rem',
    width: '100%',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: '0.25rem',
  } 
}));

export default useStyles;