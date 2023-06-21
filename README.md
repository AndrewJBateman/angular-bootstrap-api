# :zap: Angular Bootstrap API

* Simple responsive app to fetch API data and display it using RxJS observables and infinite-scrolling
* Code from [DominiCode, in Spanish](https://www.youtube.com/channel/UC3QuZuJr2_EOUak8bWUd74A) with my modifications
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-bootstrap-api?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-bootstrap-api?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-bootstrap-api?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-bootstrap-api?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Bootstrap API](#zap-angular-bootstrap-api)
  * [:page\_facing\_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal\_strength: Technologies](#signal_strength-technologies)
  * [:floppy\_disk: Setup](#floppy_disk-setup)
  * [:wrench: Testing](#wrench-testing)
  * [:computer: Code Examples (by DominiCode)](#computer-code-examples-by-dominicode)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status, Testing \& To-Do List](#clipboard-status-testing--to-do-list)
  * [:clap: Inspiration/General Tools](#clap-inspirationgeneral-tools)
  * [:file\_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Displays list of API data on Bootstrap cards
* Clicking on a card displays more details about the data item
* Infinite scrolling with button to go back to the top of the page

## :camera: Screenshots

![screenshot](./img/api.jpg)

## :signal_strength: Technologies

* [Angular framework v16](https://angular.io/)
* [Bootstrap v5](https://getbootstrap.com/)
* [jQuery v3](https://jquery.com/download/) required by Bootstrap.
* [ngx-infinite-scroll v16](https://www.npmjs.com/package/ngx-infinite-scroll)
* [@popperjs/core v2](https://www.npmjs.com/package/@popperjs/core) Tooltip & Popover Positioning Engine

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `ng serve` for a dev server. Frontend will open at `http://localhost:4200/` - refreshes on code changes
* Run `npm run build` to create a build folder in 'dist'
* Run `firebase deploy` to deploy to Google Firebase Hosting

## :wrench: Testing

* N/A

## :computer: Code Examples (by DominiCode)

* extract from `form-search.component.ts` to navigate to character-list page where the page initialisation includes a function to search for all characters matching the query.

```typescript
// navigate to character list with query to be used in page initialisation
  onSearch(value: string): void {
    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }
```

## :cool: Features

* [http data handling best practices](https://angular.io/guide/http) followed - i.e. use of separate service file to get API data then use of subscription callback function in component to subscribe to Observable data using take(1) operator. Character part of response object type defined using an interface model. Interface passed as type parameter to the HttpClient.get() method and RxJS map operator used to transform response data. Transformed data passed to async pipe.
* [Angular Activated Route snapshot params](https://angular.io/api/router/ActivatedRoute) used to pass username from github user search page to github repo display page.
* Use of handleHttpError function to return a more user-friendly error Observable
* custom paths added to `tsconfig.json` to make quoted paths in app more readable

## :clipboard: Status, Testing & To-Do List

* Status: Working. Previous version deployed to `https://pwa-apidata.web.app`.
* Testing: all files pass linting. No unit or end-to-end tests added by myself.
* To-Do: Nothing

## :clap: Inspiration/General Tools

* [Domini Code: Consumiendo API REST - Angular 10 - Rick and Morty API](https://www.youtube.com/watch?v=hGU2ceM8aVY)
* [Domini Code: Como convertir una app en Angular 10 a PWA](https://www.youtube.com/watch?v=jI0eR95U0Z0)
* [Domini Code: #programadores #angular #aprenderAngular #desarrolloWeb HttpHandler - ANGULAR 10](https://www.youtube.com/watch?v=-x_tQKNOpzI)
* [Ricky & Morty API documentation](https://rickandmortyapi.com/documentation/)
* [Logrocket: 9 tricks to eliminate render blocking resources](https://blog.logrocket.com/5-tricks-to-eliminate-render-blocking-resources/)
* [stackoverflow: Navbar dropdown (collapse) is not working in Bootstrap 5](https://stackoverflow.com/questions/65341620/navbar-dropdown-collapse-is-not-working-in-bootstrap-5)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: `gomezbateman@yahoo.com`
