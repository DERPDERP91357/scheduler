# Interview Scheduler
Interview Scheduler is a full stack web application built with React JSX and Axios that relies on data from an external api.

The application itself simulates the ability to make, edit and delete appointments in a planner. The data is stored in local state for rerenders and the external api, which serves as the database, is also updated to allow data to persist on page refresh.

## Dependencies

  - axios
  - classnames
  - normalize.css
  - react
  - react-dom
  - react-scripts

## Setup

Install dependencies with `npm install`.

NOTE: This project does not itself include a database and insteads only retrieves data from an API. Specifically, [the scheduler-api](https://github.com/dan-suen/scheduler-api). Therefore, users must run their own api locally or remotely and update the proxy in package.json accordingly to successfully fetch data.

## Running Webpack Development Server

```sh
npm start
```


# To run built-in tests:
## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running Cypress based Tests

```sh
npm run cypress
```



## Final Product

!["Main Url Page"](https://github.com/DERPDERP91357/tinyapp/blob/main/docs/tiny%20app%20main%20page.jpg?raw=true)
- Users can delete and edit links tied to their account using the associated buttons!

!["Individual Pages for Each Shortened Link"](https://github.com/DERPDERP91357/tinyapp/blob/main/docs/tinyapp%20individual.jpg?raw=true)
- Shortened link pages feature link that may be shared with others!
- New links may be created by created the "Create New URL"
- Site tracks link usage:
  - total number of visits
  - unique visitors
  - logs type, partial id and time of every visit


!["Registration Page"](https://github.com/DERPDERP91357/tinyapp/blob/main/docs/tiny%20app%20register.jpg?raw=true)

!["Login Page"](https://github.com/DERPDERP91357/tinyapp/blob/main/docs/tinyapp%20login.jpg?raw=true)
- Login and Registration is simple and secure! 
