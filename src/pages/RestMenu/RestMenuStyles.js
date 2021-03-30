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
  add: {
    position: 'fixed',
    bottom: '10%',
    right: '10%',
  },
}));

export default useStyles;