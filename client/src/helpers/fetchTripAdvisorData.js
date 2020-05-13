const fetchTripAdvisorData = (callback) => {
  const activityId = Math.floor(Math.random() * 100);
  fetch(`http://127.0.0.1:2400/trip/gallery/${activityId}`)
    .then((res) => res.json())
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => callback(err));
};

export default fetchTripAdvisorData;
