# TripsToday - Gallery Service
> A photo gallery / review modal component built with React, React CSS Transitions, Express, and MySQL

![Gallery / Review Modal](https://media.giphy.com/media/Idl9FAkqE5XDJdLKIy/giphy.gif)

<a href="https://youtu.be/KmhqD7b5MHc" target="_blank">YouTube Demo Video</a>

## Getting Started
Before starting, please have MySQL 5.7 installed. Create a config.js in the root directory, and paste the following with your user / password credentials:
  ```
  module.exports.mysqlConfig = {
    host: 'localhost',
    user: 'ExampleUserName',
    password: 'ExampleUserPassword',
    database: 'tripsTodayGallery'
  };
  ```
  
Download Dependencies:
``` 
npm install 
```

To seed database:
``` 
npm run seed 
```

To start the service:
``` 
npm start 
```

## Development
To run development server:
``` 
npm run server-dev 
```

To re-build webpack bundle on component changes:
``` 
npm run react-dev 
```

## Requirements

- Node 6.13.0 or greater
- MySQL 5.7


## Related Projects

- https://github.com/NoStepOnSnake/tripadvisor-reviews-server
- https://github.com/NoStepOnSnake/tripadvisor-itenerary-server
- https://github.com/NoStepOnSnake/tripadvisor-travelers-server

