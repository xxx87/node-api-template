# Template for API on NodeJS

#

#### Run project:

```sh
$ clone https://github.com/xxx87/node-api-template.git
$ cd ./node-api-template
$ npm install
$ npm start
or
$ npm run dev
```

> "npm run dev" - If you want to run the project in "watch" mode. Then, with any changes in the code, the server will be automatically restarted.

There are two routes in the example:

- http://localhost:5000/api/v1/auth/logout
- http://localhost:5000/api/v1/specific-path/crud

> You can change the API version (or the prefix for all routes) in the file:
> `./config/index.js` parametr `api_info`
> The file also contains examples of settings for the database (Postgres) and for sessions
