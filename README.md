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

!["Main Page"](https://github.com/dan-suen/scheduler/blob/master/public/sample/1.png?raw=true)
- On the Main Page, users can select the day of the week to show appointments listings for that day. Appointments include the attendee's name in the upper left and the interviewer's name in the lower left of timeslot.
- The taskbar also shows the remaining spots available and updates this number as appointments are made or deleted.
- Users can click on the Add button ('the plus sign') for an empty timeslot to add an appiointment by filling in a simple form.
- Users can hover over existing appointments to reveal an Edit and a Delete button, which performs their respective functionalities.
<br />
<br />

!["Form"](https://github.com/dan-suen/scheduler/blob/master/public/sample/2.png?raw=true)
- Users can input their name into the form and select one of the possible interviewers. They can then submit the form, which updates the page and external api.
- Users can also choose to cancel, which will empty the form and return them to the previous application state.
- Users MUST fill in their name AND select an interviewer to submit the form. Failure to do so will reveal an error message and prevent form submission until fixed.
!["Form Error"](https://github.com/dan-suen/scheduler/blob/master/public/sample/6.png?raw=true)

<br />
<br />
- The app shows transitional states as asynchronous operations are run to update the database in the external api and update local state prior to rerender.
!["Pending States"](https://github.com/dan-suen/scheduler/blob/master/public/sample/4.png?raw=true)


<br />
<br />
!["Error Msgs"](https://github.com/dan-suen/scheduler/blob/master/public/sample/3.png?raw=true)
- Failure to update the external database will also not update local states. Instead, error messages are returned and clicking the close icon will return users to the previous state of the application.

<br />
<br />
!["Delete Confirmation"](https://github.com/dan-suen/scheduler/blob/master/public/sample/5.png?raw=true)
- Users that cancel or delete an appointment will be asked to confirm their choice. 
