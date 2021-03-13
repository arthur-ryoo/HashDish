import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    margin: '1rem 0rem',
  },
  container: {
    width: '100%',
    margin: '1rem 0rem',
  },
  subTitle: {
    margin: '0.5rem 0rem',
  },
  image: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '75%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
    },
    margin: '1rem 0rem',
  },
  photoButton: {
    margin: '1rem 0rem',
  },
  reportContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  reportSubContainer: {
    padding: '1rem 3rem',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 0rem',
    },
  },
  reportButton: {
    margin: '0rem 0.75rem',
  },
  openHoursButton: {
    margin: '1rem 0rem',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default useStyles;
