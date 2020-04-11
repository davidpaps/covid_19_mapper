# Covid-19 Mapper

About the project...

The original repo can be found [_here_](https://github.com/nicolasraffray/covid-mapper) which took us up to the MVP.

---

## How to Run

Clone this repo, navigate to the [_test-app_](test-app) directory and in the command line type:

```
npm install
```

Once the dependencies are installed, type in the command line:

```
npm start
```

This will start the local server which can be accessed at [_localhost:3000_](http://localhost:3000/)

The project is also hosted live on [_Heroku_](https://covid-mapper.herokuapp.com/)

---

## How to Run Tests

Jest and Enzyme


```
npm test
```

```
npm test -- --coverage --watchAll
```

```
npm -- --updateSnapshot
```