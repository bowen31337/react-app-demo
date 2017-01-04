## Available Scripts

This project is an "eject" version of create-react-app,but added with more features/changes below:
- Yarn package management
- move babel config from package.json to .bablesc
- multi-entries, code splitting on production
- add service-worker for production (Progressive Web Apps)

### Project Description
The widget reads a list of data (5000 items) from remote endpoint, renders with pagination in a table.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.



### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

After builds, You may also serve it locally with a static server:
``` js
npm install -g pushstate-server
pushstate-server build
open http://localhost:9000
```

### `npm run deploy`

Deploy app to Now server, please refer to this post:  [Zero Configuration Deployment for React app with Zeit Now](https://medium.com/@kawixiao/zero-configuration-deployment-for-react-apps-with-zeits-now-4f002be98c#.eyvj3mjdb)
