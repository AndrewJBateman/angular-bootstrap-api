# :zap: Angular Bootstrap API

* Simple responsive app to fetch API data and display it using RxJS observables and infinite-scrolling

**\* Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* Displays list of API data on Boostrap cards
* Clicking on a card displays more details about the data item
* Infinite scrolling with button to go back to the top of the page

## :camera: Screenshots

![screenshot](./img/api.jpg)

## :signal_strength: Technologies

* [Angular framework v11](https://angular.io/)
* [Bootstrap v4](https://getbootstrap.com/)
* [jQuery v3](https://jquery.com/download/) required by Bootstrap.
* [ngx-infinite-scroll v10](https://www.npmjs.com/package/ngx-infinite-scroll)

## :floppy_disk: Setup - Frontend

* Install dependencies using `npm i`
* Run `ng serve` for a dev server. Frontend will open at `http://localhost:4200/` - refreshes on code changes
* Run `npm run lint` to lint test entire codebase using TSLint.
* Run `npm run build` to generate a build file without SSR
* Run `npm run build:ssr` to generate a build file with SSR. Add `defer=""` to browser css file ref.
* Run `npm run serve:ssr` to see on a dev server `http://localhost:4000`
* Run `ng deploy` to deploy to Google Firebase Hosting (already setup)
* Run `npm outdated` to see if any npm dependencies are outdated.

## :wrench: Testing

* Run `ng test` to run Jasmine unit tests via [Karma](https://karma-runner.github.io)
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## :computer: Code Examples

* tba

```typescript

```

## :cool: Features

* [http data handling best practices](https://angular.io/guide/http) followed - i.e. use of separate service file to get API data then use of subscription callback function in component to subscribe to Observable data. Response object type defined using an interface model. Interface passed as type parameter to the HttpClient.get() method and RxJS map operator used to transform response data. Transformed data passed to async pipe.
* [Angular Activated Route snapshot params](https://angular.io/api/router/ActivatedRoute) used to pass username from github user search page to github repo display page.

## :clipboard: Status, Testing & To-Do List

* Status: Working using tst API data. Deployed
* Testing: tba
* To-Do: replace API

## :clap: Inspiration/General Tools

* [Logrocket: 5 tricks to eliminate render blocking resources](https://blog.logrocket.com/5-tricks-to-eliminate-render-blocking-resources/)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
