# Intuit Mint Clone Using Angular

By Epicodus Independent Project - Advanced JavaScript Week 3 & 4 - 10/26/2018.

## Description

The goal of this project is to rebuil a website using Angular with the following criteria:

- The site can be divided into multiple components.

- The project must utilize a database.

## Project Planning and Specifications

The website should includes a landing page, an authentication page and a main page where the user can manage their financials.

### Specifications

- The user should be able to sign up for a new account.
- The user should be able to sign in to an existing account.
- The user should be able to view the balance on all connected accounts.
- The user should be able to view spending trends.
- The user should see a list of transactions.

### Completed Features

- The public page is available to everyone.
- The private page is only visible to authenticated users only using an authentication guard.
- User authentication using Firebase Google Auth.
- Transactional data is pulled from Firebase and can be sorted using various pipes.
- The website is deloyed to Firebase at http://mock-mint.firebaseapp.com.

## Setup/Installation Requirements

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Firebase Setup and Deployment

- Create a Firebase account.
- Create a Firebase project.
- In the Overview area, select the "Add Firebase to your web app" option to collect your API information.
- Install AngularFire and Firebase using npm:

`npm install angularfire2@4.0.0-rc.0 firebase@^3.6.6 --save`

- Add this line to your tsconfig.json at the very end to mention Firebase:

`"type":["firebase"]`

- Create a new file called api-keys.ts in the src/app directory. Then place our Firebase credentials (the information Firebase provided in that modal window), like this:

> export const masterFirebaseConfig = { 
> apiKey: "xxxx", authDomain: "xxxx.firebaseapp.com", 
> databaseURL: "https://xxxx.firebaseio.com", 
> storageBucket: "xxxx.appspot.com", messagingSenderId: "xxxx" };

- Add /src/app/api-keys.ts to .gitignore.
- In src/app/app.module.ts, import and export the following:

`` import { masterFirebaseConfig } from './api-keys';``
`` import { AngularFireModule } from 'angularfire2';``
``import { AngularFireDatabaseModule } from 'angularfire2/database';``

> export const firebaseConfig = {
  > apiKey: masterFirebaseConfig.apiKey,
  > authDomain: masterFirebaseConfig.authDomain,
  > databaseURL: masterFirebaseConfig.databaseURL,
  > storageBucket: masterFirebaseConfig.storageBucket
    >};

- Add these to the import array in your app.module.ts:

``
AngularFireModule.initializeApp(firebaseConfig),
AngularFireDatabaseModule
``

- Build the application before deploying:

`ng build --env=prod`

- Install Firebase-tools and deploying:

``npm install -g firebase-tools``

``firebase login``

``firebase init``

``firebase deploy``

## Support and contact details

Please contact us at skye@dames.es for more information and/or feedback.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs

- Images on the home page panels automatically resize to 100% when a change is made to the project.
  - Attempted fix: Move the panel component stylings to styles.css.
  - Current fix: refresh the browser.

## Technologies Used

- TypeScript
- JavaScript
- NodeJs
- Firebase
- Homebrew
- Angular CLI 1.6.5
- Git
- GitHub

### License: MIT

#### Copyright (c) 2018 Skye Nguyen
