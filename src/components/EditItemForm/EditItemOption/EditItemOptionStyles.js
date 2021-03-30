import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '0.25rem',
    border: '#AAAAAA solid 1px',
    borderRadius: '5px',
    padding: '0.5rem',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    marginBottom: '0.5rem',
  },
  button: {
    // margin: '1rem',
  },
  checkbox: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

export default useStyles;