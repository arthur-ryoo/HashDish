import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem 1rem',
  }, 
  container: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '1rem 0rem',
  },

}));

export default useStyles;