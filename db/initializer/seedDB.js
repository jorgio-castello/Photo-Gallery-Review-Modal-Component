const fs = require('fs');
const path = require('path');
const os = require('os');
const _ = require('underscore');
const { TripAdvisorActivity } = require('./data/TripAdvisorActivity.js');
const { TripAdvisorPhoto } = require('./data/TripAdvisorPhoto.js');
const { TripAdvisorPhotoCreatorInfo } = require('./data/TripAdvisorPhotoCreatorInfo.js');
const { addActivity, addPhotoCreatorInfo, addPhoto } = require('../models/index.js');

const imageUrlsFilePath = path.join(__dirname, '../', 'aws-S3', 'S3-picture-urls.txt');

// Reads the S3 url links from the text file described above
// The url links are shuffled so that they appear in a random order
// The url links are passed to a callback, which begins the process of populating the database
const init = (filePath, callback) => {
  fs.readFile(filePath, 'utf8', (err, filePaths) => {
    if (err) {
      throw new Error(err);
    } else {
      let imageUrls = filePaths.split(os.EOL);
      imageUrls = imageUrls.slice(1, 100);
      imageUrls = _.shuffle(imageUrls);
      callback(imageUrls);
    }
  });
};

const addImages = (photos, activityId, infoId, randomImgCountForActivity, imgIdxForActivity, callback) => {
  if (imgIdxForActivity === randomImgCountForActivity) {
    callback('Hello World');
  } else {
    const newPhoto = new TripAdvisorPhoto(photos[imgIdxForActivity]);
    addPhoto(newPhoto, activityId, infoId, (err) => {
      if (err) {
        throw new Error(err);
      } else {
        addImages(photos, activityId, infoId, randomImgCountForActivity, imgIdxForActivity + 1, callback);
      }
    });
  }
};

const addInfoForActivity = (photos, activityId, randomNumberOfImagesForActivity, callback) => {
  if (randomNumberOfImagesForActivity <= 0) {
    callback('Hello World');
  } else {
    // Generates a random number between 2 and 5 for the number of photos per info object
    const randomNumberOfImagesPerInfo = Math.min(Math.floor(Math.random() * (5 - 1 + 1) + 1), randomNumberOfImagesForActivity);

    // Generate a newInfo Object
    const newInfo = new TripAdvisorPhotoCreatorInfo();
    newInfo.createdByManagement();

    addPhotoCreatorInfo(newInfo, (infoId) => {
      addImages(photos, activityId, infoId, randomNumberOfImagesPerInfo, 0, () => {
        const remainingNumberOfImagesForActivity = randomNumberOfImagesForActivity - randomNumberOfImagesPerInfo;
        photos.splice(0, randomNumberOfImagesPerInfo);
        addInfoForActivity(photos, activityId, remainingNumberOfImagesForActivity, callback);
      });
    });
  }
};

const populateDatabase = (photos, activityCount = 0) => {
  // Create a new activity
  const newActivity = new TripAdvisorActivity();
  newActivity.setActivity();

  addActivity(newActivity, (activityId) => {
    // Generates a random number between 10 and 15 for the number of photos per activity
    const randomNumberOfImagesForActivity = Math.floor(Math.random() * (15 - 10 + 1) + 10);
    addInfoForActivity(photos, activityId, randomNumberOfImagesForActivity, (data) => console.log(data));
  });



};

init(imageUrlsFilePath, (imagePaths) => populateDatabase(imagePaths));
