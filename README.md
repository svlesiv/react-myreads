# MyReads Project

## Description

MyReads project is a bookshelf app that allows to select and categorize books which user have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that user can use to persist information while interacting with the application.

![My reads App](../public/correct-use-of-state.gif)

## Installation

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Content
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for user to use with the app.
├── package.json
├── public
|   ├── correct-use-of-state.gif
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├──api
    │   └── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├──components
    |  ├── Book.js
    |  ├── BookShelf.js
    |  ├── ListBooks.js
    |  ├── MyBookShelfs.js
    |  └── SearchBooks.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.    
    ├── index.css # Global styles.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
