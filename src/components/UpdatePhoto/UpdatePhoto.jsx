import React, { useState } from 'react';
import { axiosApiInstance as API } from '../../utils/axiosConfig';
import {
  Backdrop,
  Button,
  CircularProgress,
  Typography,
} from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';
import useStyles from './UpdatePhotoStyles';

function UpdatePhoto(props) {
  const classes = useStyles();

  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const isFormValid = () => {
    return image;
  };

  const resizeImage = (file) => {
    if (
      window.File &&
      window.FileReader &&
      window.FileList &&
      window.Blob
    ) {
      let reader = new FileReader();
      // Set the image once loaded into file reader
      reader.onloadend = (e) => {
        let image = new Image();
        image.onload = () => {
          let canvas = document.createElement('canvas');
          let MAX_WIDTH;
          let MAX_HEIGHT;
          let ratio = image.width / image.height;
          if (1 > ratio) {
            MAX_WIDTH = 500;
            MAX_HEIGHT = 500 / ratio;
          } else {
            MAX_WIDTH = 500 * ratio;
            MAX_HEIGHT = 500;
          }
          canvas.width = MAX_WIDTH;
          canvas.height = MAX_HEIGHT;
          let ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, MAX_WIDTH, MAX_HEIGHT);

          let imageURL = canvas.toDataURL(file.type);
          setImage(imageURL);
        };
        image.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
  };

  const handleImageChange = async (e) => {
    if (e.target.files.length > 0) {
      resizeImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await API.patch(`/kitchen/picture`, {
      data: image.split(',')[1],
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    props.handleFormToggle('editProfPhoto');
    props.handleGetKitchen();
  };

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        {error && (
          <Alert className={classes.alert} severity="error">
            {error}
          </Alert>
        )}
        <Typography variant="h6">Update Profile Image</Typography>
        <div className={classes.input}>
          {image && (
            <img
              className={classes.image}
              src={image}
              alt="restaurant logo"
            />
          )}
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            width="50"
            height="50"
            onChange={handleImageChange}
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={!isFormValid()}
            type="submit"
          >
            Update
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            id="editProfPhoto"
            onClick={props.handleClick}
          >
            Cancel
          </Button>
        </div>
      </form>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default UpdatePhoto;
