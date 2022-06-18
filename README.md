# Bank Api With React And Node Js

**Version 1.00**

Code and document for the Bank Api With React And Node Js.

This is project that made in appleSeeds bootCamp.

## How I Build The Project

I use REACT and NODE-JS to build the project.

I connect both of them to HEROKU SERVER.

I use ALOTE OF NODE-JS ROUTES to handle the data,
build the JSON-DATA that i need for connect and render,
the data from the END-POINT.

I use 4 methods with the API: GET,POST,DELETE AND PUT(CRUD).

I use REACT ROUTER to handle page routing.

## END-POINT to get data:

- post -
- https://bank-api-amir.herokuapp.com/bank/createusers
  body: {
  "id": number,
  "cash": number,
  "credit": number,
  "account": [number]
  }
-
- get -
- https://bank-api-amir.herokuapp.com/bank/get-all-users
-
- delete -
- https://bank-api-amir.herokuapp.com/bank/deleteusers
  body: {
  "id": number,
  "cash": number,
  "credit": number,
  "account": [number]
  }
-
- put -
- https://bank-api-amir.herokuapp.com/bank/update-user-deposit
  body:{
  "id": number,
  "cash": number,
  "accountToDeposit":number
  }
-
- put -
- https://bank-api-amir.herokuapp.com/bank/update-user-credit
  body:{
  "id": number,
  "credit": number,
  "accountToCredit":number
  }
-
- put -
- https://bank-api-amir.herokuapp.com/bank/update-user-withdraw
  body:{
  "id": number,
  "cash": number
  }
-
- put -
- https://bank-api-amir.herokuapp.com/bank/update-user-transfer
  body:{
  "id": number,
  "cash": number,
  "accountToTransfer":number
  }
-
- get -
- https://bank-api-amir.herokuapp.com/bank/get-user-details

\*\* What Languege I Use

- I made it with JAVA-SCRIPT , REACT AND NODE-JS.
- I use a lot of method and separate the code
- to different files.

- NODE-JS BUILD
- REACT ROUTER
- EXPRESS
- API METHODS

---

## Contributors

- Amir Gilboa <amirg76@gmail.com>

---

### License & copyright

© Amir Gilboa

- Fullstack Developer
