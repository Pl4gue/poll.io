# poll.io - A Fullstack Realtime Polling Application
poll.io is built on ReactJS on the Front-End and ExpressJS on the Back-End.

# Local Build Instructions
Make sure you have either `yarn` or `npm` installed. (We recommend `yarn`)

## Installing all dependencies of the server
```
yarn install
```

## Installing all dependencies of the client
```
cd client/
yarn install
```

## Start Express server and React frontend
Before doing this step, make sure you have nothing running on both port 5000 and port 3000.

You may change these ports in `package.json` by replacing 
```
var port = normalizePort(process.env.PORT || '5000');
```
in `./bin/www` with your own port number for Express. **If you do this, make sure that the proxy port in `client/package.json` is still the same as your Express port number.**

**If you have ensured this, run**
```
yarn dev
```

## See Local build
Simply visit
```
localhost:5000 // or whatever port you defined
```

## Troubleshoot React development
Make sure to disable cache for proper live reloading of React