const db = require('../index.js');

const addActivity = ({ name, location }, callback) => {
  const query = `insert into activity(name, location) values('${name}','${location}')`;
  db.query(query, (err, success) => {
    if (err) {
      throw new Error(err);
    } else {
      callback(success.insertId);
    }
  });
};

const addPhotoCreatorInfo = (info, callback) => {
  /* eslint-disable camelcase */
  const {
    user, user_contributions, date_created, review_title,
    review_description, review_stars, review_helpful_score,
  } = info;

  const query = `insert into photoCreatorInfo(user, user_contributions, date_created, review_title, review_description, review_stars, review_helpful_score) values('${user}', ${user_contributions}, '${date_created}', '${review_title}', '${review_description}', ${review_stars}, ${review_helpful_score})`;
  /* eslint-disable camelcase */

  db.query(query, (err, success) => {
    if (err) {
      throw new Error(err);
    } else {
      callback(success.insertId);
    }
  });
};

const addPhoto = (photoObj, activity_id, photoCreatorInfo_id) => {
  const { link, alt } = photoObj;
  const query = `insert into photos(link, alt, activity_id, photoCreatorInfo_id) values('${link}', '${alt}', ${activity_id}, ${photoCreatorInfo_id})`;
  db.query(query, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
};


module.exports.addActivity = addActivity;
module.exports.addPhotoCreatorInfo = addPhotoCreatorInfo;
module.exports.addPhoto = addPhoto;
// addActivity(activity, (activity_id) => {
//   addPhotoCreatorInfo(info, (photoCreatorInfo_id) => {
//     addPhoto({link: '.jpeg', alt: 'hello' }, activity_id, photoCreatorInfo_id);
//   });
// });
