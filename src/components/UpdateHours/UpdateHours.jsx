import React, { Component } from 'react';
import { axiosApiInstance as API } from '../../utils/axiosConfig';
import {
  Container,
  Typography,
  Box,
  Button,
  Backdrop,
  CircularProgress,
  TextField,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
});

function formatTime(time) {
  return [
    ('0' + String(Math.floor(time / 100))).slice(-2),
    ':',
    ('0' + String(time % 100)).slice(-2),
  ].join('');
}

function deformatTime(time) {
  let newTime = time.slice(0, 2) + time.slice(3);
  if (newTime[0] === '0') {
    newTime = newTime.slice(1);
  }
  return Number(newTime);
}

class UpdateHours extends Component {
  state = {
    openHourList: this.props.openHours,
    isLoading: false,
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.setState({ openHourList: this.props.openHours });
    this.props.handleFormToggle('editHours');
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    let jsonArray = JSON.stringify(this.state.openHourList);
    let json = JSON.stringify({
      flags: '1',
      openHours: `{"country":"US","openHours":${jsonArray}}`,
    });

    await API.patch(`/kitchen`, json, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({ isLoading: false });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    this.props.handleFormToggle('editHours');
  };

  render() {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const { classes } = this.props;
    const { isLoading, openHourList } = this.state;

    return (
      <div style={{ backgroundColor: '#f6f4d2' }}>
        <Container maxWidth="sm">
          <Box marginTop={5} textAlign="center">
            <Typography variant="h4">Update Hours</Typography>
          </Box>
          <form>
            {openHourList.map((blocks, idx) => (
              <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                margin={2}
                key={days[idx]}
              >
                <Box marginRight={3}>
                  <Typography variant="body1">{days[idx]}</Typography>
                </Box>
                <Box>
                  {blocks.map((block, idx2) => (
                    <Box marginTop={3} marginBottom={3} key={idx2}>
                      <TextField
                        label="Open"
                        type="time"
                        value={formatTime(openHourList[idx][idx2][0])}
                        onChange={(e) => {
                          let arr = openHourList;
                          arr[idx][idx2][0] = deformatTime(
                            e.target.value,
                          );
                          this.setState({
                            openHourList: arr,
                          });
                        }}
                      />
                      <Box marginTop={1}>
                        <TextField
                          label="Close"
                          type="time"
                          value={formatTime(
                            openHourList[idx][idx2][1],
                          )}
                          onChange={(e) => {
                            let arr = openHourList;
                            arr[idx][idx2][1] = deformatTime(
                              e.target.value,
                            );
                            this.setState({
                              openHourList: arr,
                            });
                          }}
                        />
                        <Button
                          type="button"
                          onClick={() => {
                            let arr = openHourList;
                            arr[idx] = arr[idx].filter(
                              (item) => item !== block,
                            );
                            this.setState({
                              openHourList: arr,
                            });
                          }}
                        >
                          <DeleteIcon
                            fontSize="large"
                            color="secondary"
                          />
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Button
                  type="button"
                  onClick={() => {
                    let arr = openHourList;
                    arr[idx].push([0, 0]);
                    this.setState({
                      openHourList: arr,
                    });
                  }}
                >
                  <AddCircleIcon fontSize="large" color="primary" />
                </Button>
              </Box>
            ))}
          </form>
          <Box
            display="flex"
            justifyContent="center"
            marginTop={3}
            marginBottom={3}
          >
            <Box marginRight={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Update
              </Button>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              id="editHours"
              onClick={this.handleCancel}
            >
              Cancel
            </Button>
          </Box>
        </Container>
        <Backdrop className={classes.backdrop} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }
}

export default withStyles(styles)(UpdateHours);
