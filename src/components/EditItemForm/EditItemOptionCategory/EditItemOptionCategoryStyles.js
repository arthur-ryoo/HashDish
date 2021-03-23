import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  category: {
    border: 'red solid 5px',
  },
  interface: {
    border: 'green solid 3px',
  },
  title: {
    display: 'flex',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

export default useStyles;