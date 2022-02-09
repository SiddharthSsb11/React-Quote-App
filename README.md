# Great Quotes

> A Simple Quote Apllication

A simple Quote apoplication made using [React JS](https://reactjs.org/docs/getting-started.html), to post new quotes and interact, comment on previously posted posts by others. Powered by [Firebase](https://firebase.google.com/).

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/).

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to _transpile_ all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

This is a _responsive web application_ for viewing in both Mobile and Desktop.

### Few Screenshots

![AllQuotes](/screenshots/quote1.png "AllQuotes")
![Comments](/screenshots/quote2.png "Comments")

## Features

- Add your quotes.
- Comment on previously posted quotes.
- All the quotes are stored in the firebase realtime-database i.e. <i>persistant</i>
- React-router is used in this SPA app.

## Hosted/Deployed

https://react-router-quotes-ssb.netlify.app/quotes

### Clone the repository:
```
git clone https://github.com/SiddharthSsb11/React-Quote-App.git
```


### Install Dependencies

```
npm install
```

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

