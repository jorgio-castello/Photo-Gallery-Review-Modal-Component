const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getGalleryForActivityId } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/tripAdvisor/:activityId/gallery', getGalleryForActivityId);

app.listen(9999, () => console.log('Server is running on Port 9999...'));
