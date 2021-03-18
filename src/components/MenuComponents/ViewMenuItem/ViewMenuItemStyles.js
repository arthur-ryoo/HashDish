import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '1rem',
    padding: '1rem',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '70%',
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
    },
    margin: '1rem 0rem',
  },

}));

export default useStyles;