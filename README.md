# LAB - Class 26

## Project: Component Based UI

### Author: Reece Renninger

### Problem Domain  

Today, we begin the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/ReeceRenninger/resty/actions/new)
- [front-end application](https://tjczmm-3000.csb.app/) (deployed on sandbox)

### Collaborators

### Setup

#### `.env` requirements (where applicable)

for now I have none and do not require one


#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- GET : grabs mock data from a json file and displays it on the page

#### Tests

- npm test (once they are created)

#### UML

![Alt text](assets/ComponentUI-Lab.png)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# LAB - Class 27

## Project: useState hooks

### Author: Reece Renninger

### Problem Domain  

In phase 2, we will be receiving user input in preparation of connecting to live APIs, using the useState() hook in our functional components. In order to properly manage state with the useState hook, we will now convert <App /> to a functional component.

The following user stories detail the major functionality for this phase of the project.

    As a user, I want to enter the REST Method and URL to an API.
    As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format.

Application Flow:

    User enters an API URL.
    Chooses a REST Method.
    Clicks the “Go” button.
    Application fetches data from the URL given, with the method specified.
    Displays the response headers and results separately.
    Both headers and results should be “pretty printed” JSON.


### Links and Resources

- [GitHub Actions ci/cd](https://github.com/ReeceRenninger/resty/actions/new)
- [front-end application](https://codesandbox.io/p/github/ReeceRenninger/resty/state?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clj664zld00fu2a6falthz3y1%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clj664zld00fw2a6fc6gxhdof%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clj664zld00fu2a6falthz3y1%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clj664zld00ft2a6fxdazyxo7%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clj664zld00fu2a6falthz3y1%2522%252C%2522activeTabId%2522%253A%2522clj664zld00ft2a6fxdazyxo7%2522%257D%252C%2522clj664zld00fw2a6fc6gxhdof%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clj664zld00fv2a6fm4a06ytj%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clj664zld00fw2a6fc6gxhdof%2522%252C%2522activeTabId%2522%253A%2522clj664zld00fv2a6fm4a06ytj%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D) (deployed on sandbox)

### Collaborators

- Sir Ike on the daily

### Setup

#### `.env` requirements (where applicable)

for now I have none and do not require one


#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- GET : grabs mock data from a json file and displays it on the page

#### Tests

- npm test (once they are created)

#### UML

![Alt text](assets/day27LabUML.png)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# LAB - Class 28

## Project: useEffect hooks

### Author: Reece Renninger

### Problem Domain  

In phase 3, we will be connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service GET requests.

The following user stories detail the major functionality for this phase of the project.

    As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data.
    As a user, I want to see the results returned from an API request in my browser in a readable format.

Application Flow:

    User enters an API URL.
    Chooses a REST Method.
    Clicks the “Go” button.
    Application fetches data from the URL given, with the method specified.
    Displays the response headers and results separately.
    Both headers and results should be “pretty printed” JSON.



### Links and Resources

- [GitHub Actions ci/cd](https://github.com/ReeceRenninger/resty/actions/new)
- [front-end application](https://codesandbox.io/p/github/ReeceRenninger/resty/effect-hook?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clj7qrcem008q2a6f7ona4l8y%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clj7qrcem008s2a6fllzuqpus%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clj7qrcem008q2a6f7ona4l8y%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clj7qrcel008p2a6fwi043o2r%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clj7qrcem008q2a6f7ona4l8y%2522%252C%2522activeTabId%2522%253A%2522clj7qrcel008p2a6fwi043o2r%2522%257D%252C%2522clj7qrcem008s2a6fllzuqpus%2522%253A%257B%2522id%2522%253A%2522clj7qrcem008s2a6fllzuqpus%2522%252C%2522activeTabId%2522%253A%2522clj7qro5c00f22a6fsv3f8g2w%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clj7qro5c00f22a6fsv3f8g2w%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522clj7qrscs00n12a6f5dyx9sws%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D) (deployed on sandbox)

### Collaborators

- Sir Ike & Sir Nicholas on the daily
- Tony the GOAT


### Setup

#### `.env` requirements (where applicable)

for now I have none and do not require one


#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- GET : grabs mock data from a json file and displays it on the page

#### Tests

- npm test (once they are created)

#### UML

![Alt text](assets/day28LabUML.png)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# LAB - Class 29

## Project: Advanced State with Reducers

### Author: Reece Renninger

### Problem Domain  

In phase 4, we will be tracking every API call and storing it in history.

The following user stories detail the major functionality for this phase of the project.

    As a user, I want to see a list of my previous API calls, so that I can see the results again, quickly.

Application Flow:

    User enters an API URL.
    Chooses a REST Method.
    Clicks the “Go” button.
    Application fetches data from the URL given, with the method specified.
    Application stores the API request and returned data into state.
        Updates the list of previous API calls.
    Application Displays the response headers and results separately.
        Both headers and results should be “pretty printed” JSON.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/ReeceRenninger/resty/actions/new)
- [front-end application](https://codesandbox.io/p/github/ReeceRenninger/resty/reducer-hook?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clj98pvsv008l2a6fzggwzbj5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clj98pvsv008n2a6ffru40lmv%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clj98pvsv008l2a6fzggwzbj5%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clj98pvsv008k2a6faymuwoxk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clj98pvsv008l2a6fzggwzbj5%2522%252C%2522activeTabId%2522%253A%2522clj98pvsv008k2a6faymuwoxk%2522%257D%252C%2522clj98pvsv008n2a6ffru40lmv%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clj98pvsv008m2a6fwvcz3m9n%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%257D%255D%252C%2522id%2522%253A%2522clj98pvsv008n2a6ffru40lmv%2522%252C%2522activeTabId%2522%253A%2522clj98pvsv008m2a6fwvcz3m9n%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D) (deployed on sandbox)

### Collaborators

- Sir Ike & Sir Nicholas on the daily

### Setup

#### `.env` requirements (where applicable)

for now I have none and do not require one

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- GET : grabs mock data from a json file and displays it on the page

#### Tests

- npm test (once they are created)

#### UML

- reference UML above
