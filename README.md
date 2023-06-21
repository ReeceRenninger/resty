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
- [front-end application](https://tjczmm-3000.csb.app/) (deployed on sandbox)

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