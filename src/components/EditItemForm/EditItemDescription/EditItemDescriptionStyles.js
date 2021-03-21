import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '0.5rem',
  },
  label: {
    fontWeight: '800',
    marginBottom: '0.25rem',
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