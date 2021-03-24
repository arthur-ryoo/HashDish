import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    padding: '0rem',
    marginBottom: '1rem'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '0.5rem',
  },
  input: {
    marginBottom: '0.75rem',
  },
  image: {
    width: '90%',
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