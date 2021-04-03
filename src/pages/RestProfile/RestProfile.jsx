import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHours from '../../components/UpdateHours/UpdateHours';
import UpdatePhoto from '../../components/UpdatePhoto/UpdatePhoto';
import { axiosApiInstance as API } from '../../utils/axiosConfig';
import {
  Box,
  Button,
  Backdrop,
  Container,
  CircularProgress,
  Dialog,
  Divider,
  Input,
  List,
  ListItemText,
  NativeSelect,
  Typography,
} from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import useStyles from './RestProfileStyles';

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let STORAGE_URL = 'https://homecookimages.blob.core.windows.net/';
if (process.env.NODE_ENV === 'production') {
  // STORAGE_URL = 'https://lycheestorage9999.blob.core.windows.net/';
  STORAGE_URL = 'https://hashdish.blob.core.windows.net/';
}

function profileTime(timeArr) {
  let timeStringArr = [];
  for (let time of timeArr) {
    let start = [
      String(
        Math.floor(time[0] / 100) % 12 === 0
          ? 12
          : Math.floor(time[0] / 100) % 12,
      ),
      ':',
      ('0' + String(time[0] % 100)).slice(-2),
      time[0] / 100 >= 12 ? ' PM' : ' AM',
    ].join('');
    let end = [
      String(
        Math.floor(time[1] / 100) % 12 === 0
          ? 12
          : Math.floor(time[1] / 100) % 12,
      ),
      ':',
      ('0' + String(time[1] % 100)).slice(-2),
      time[1] / 100 >= 12 ? ' PM' : ' AM',
    ].join('');
    timeStringArr.push(`${start} - ${end}`);
  }
  return timeStringArr.join(', ');
}

function Profile(props) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    year: '',
    yearOnly: '',
    month: '',
  });

  const { year, yearOnly, month } = state;

  const handleGenerateReport = async () => {
    setIsLoading(true);
    if (month) {
      await API.get(`/kitchen/report/${year}/${month}`).then(
        (response) => {
          if (response.status === 200) {
            setIsLoading(false);
            window.open(
              `https://hashdishhtmltopdf.azurewebsites.net/api/convert?url=${response.data.url}`,
            );
          }
        },
      );
    } else {
      await API.get(`/kitchen/report/${yearOnly}/*`).then(
        (response) => {
          if (response.status === 200) {
            setIsLoading(false);
            window.open(
              `https://hashdishhtmltopdf.azurewebsites.net/api/convert?url=${response.data.url}`,
            );
          }
        },
      );
    }
  };

  const handleMonthChange = (e) => {
    let yearMonth = e.target.value.split('-');
    let year = parseInt(yearMonth[0], 10);
    let month = parseInt(yearMonth[1], 10);
    let now = new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      1,
    );
    if (
      now.getFullYear() < year ||
      (now.getFullYear() === year && now.getMonth() + 1 < month)
    ) {
      alert(
        `Cannot generate report for ${year}-${('0' + month).slice(
          -2,
        )}`,
      );
      setState({
        year: undefined,
        month: undefined,
        yearOnly: undefined,
      });
    } else {
      setState({
        year,
        month,
      });
    }
  };

  const handleYearChange = (e) => {
    setState({
      yearOnly: e.target.value,
    });
  };

  return (
    <div>
      {props.myKitchen === null ? (
        <Redirect to="/profile" />
      ) : (
        <Container className={classes.root} maxWidth={false}>
          <div className={classes.container}>
            <Typography variant="h4">Profile</Typography>
            <img
              className={classes.image}
              src={`${STORAGE_URL}pictures/${props.myKitchen.pictureKey}.jpg`}
              alt="restaurant logo"
            />
            <div className={classes.subTitle}>
              <Typography variant="h5">
                {props.myKitchen.name}
              </Typography>
            </div>
            <Typography variant="h6">
              <PlaceIcon fontSize="small" color="primary" />
              {props.myKitchen.address}
            </Typography>
            <Typography variant="h6">
              <PhoneIcon fontSize="small" color="primary" />
              {props.myKitchen.phoneNumber}
            </Typography>
            {props.editProfPhoto ? (
              <Dialog open={true}>
                <UpdatePhoto
                  handleFormToggle={props.handleFormToggle}
                  handleGetKitchen={props.handleGetKitchen}
                  handleClick={props.handleClick}
                />
              </Dialog>
            ) : (
              <div className={classes.photoButton}>
                <Button
                  variant="contained"
                  color="primary"
                  id="editProfPhoto"
                  onClick={props.handleClick}
                >
                  Update Photo
                </Button>
              </div>
            )}
          </div>
          <div className={classes.container}>
            <Divider />
            <Box marginTop={5}>
              <Typography variant="h4">Report</Typography>
            </Box>
            <div className={classes.reportContainer}>
              <div className={classes.reportSubContainer}>
                <div className={classes.subTitle}>
                  <Typography variant="h6">Monthly Report</Typography>
                </div>
                <Input
                  type="month"
                  value={
                    year ? `${year}-${('0' + month).slice(-2)}` : ''
                  }
                  onChange={handleMonthChange}
                />
                <Button
                  className={classes.reportButton}
                  variant="contained"
                  color="primary"
                  disabled={!year}
                  id="generateReport"
                  onClick={handleGenerateReport}
                >
                  Generate
                </Button>
              </div>
              <div className={classes.reportSubContainer}>
                <div className={classes.subTitle}>
                  <Typography variant="h6">Yearly Report</Typography>
                </div>
                <NativeSelect onChange={handleYearChange}>
                  <option>Select Year</option>
                  {[
                    ...new Array(new Date().getFullYear() - 2020),
                  ].map((v, i) => {
                    return <option key={i}>{i + 2020}</option>;
                  })}
                </NativeSelect>
                <Button
                  className={classes.reportButton}
                  variant="contained"
                  color="primary"
                  disabled={!yearOnly}
                  id="generateReport"
                  onClick={handleGenerateReport}
                >
                  Generate
                </Button>
              </div>
              <Backdrop className={classes.backdrop} open={isLoading}>
                <CircularProgress color="inherit" />
              </Backdrop>
            </div>
          </div>

          <div className={classes.container}>
            <Divider />
            <Box marginTop={5}>
              <Typography variant="h4">Open Hours</Typography>
            </Box>
            {props.editHours ? (
              <Dialog open={true}>
                <UpdateHours
                  openHours={props.openHours}
                  handleClick={props.handleClick}
                  handleFormToggle={props.handleFormToggle}
                  handleGetKitchen={props.handleGetKitchen}
                />
              </Dialog>
            ) : (
              <div>
                <Box marginTop={3}>
                  <List component="ul" display="block">
                    {DAYS.map((DAY, idx) => (
                      <ListItemText key={idx}>
                        {DAY}:{' '}
                        {props.openHours[idx]?.length > 0
                          ? `${profileTime(props.openHours[idx])}`
                          : 'Closed'}
                      </ListItemText>
                    ))}
                  </List>
                </Box>
                <div className={classes.openHoursButton}>
                  <Button
                    variant="contained"
                    color="primary"
                    id="editHours"
                    onClick={props.handleClick}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      )}
    </div>
  );
}

export default Profile;
