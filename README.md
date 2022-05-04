## Project Description

join-deliberate is a frontend project that access an external API, provide a search engine to find content about health and display all the results on the page.


## Project Motivation

This project is a code assessment to show knowleadge of React and code best practices. 

## Tech Specs

- React 
- TypeScript
- Boostrap

### Important libraries and frameworks:

- create-react-app
- html-react-parser
- react-testing-library

## External API Info

- The External API used for this project is called myHealthFinderAPI and its documentation can be find [here](https://health.gov/our-work/national-health-initiatives/health-literacy/consumer-health-content/free-web-content/apis-developers/api-documentation).

## Usage 🚀

- from the folder you want to clone this repository, in your terminal, execute `git clone`.
- enter in the project's root folder and execute `npm install`, to get all the project's dependecies. 
- to initiate the project, also from the root folder, run in your terminal the command `npm start`
- the URL will be http://localhost:5000/

### Test Usage

- from the project's root folder , inside your terminal, run `npm test`.


## Project Funcionalities


The project is divided in two major aspects: search and healthTopics. The search cares about the search engine. And healthTopics cares about the results and how to display them.

- the user can search for health content by typing a keyword using the search input. 

- while the user is typing, the app will suggest some words to facilitate the typing process and also to give some guesses about what subjects can be found. The user has the option to use those words or not. 

- after performing the search, the results will be visible on the page with the following pattern: 

    
    <img width="1455" alt="Captura de Tela 2022-05-04 às 12 12 06 AM" src="https://user-images.githubusercontent.com/62966004/166622449-af151ea1-c91a-445f-b71f-0d89be967fb5.png">


    - every result will be a specific card. This card will have a title, categories, related items and sections(articles).

    - the related items and sections(articles) are show as buttons (to minimized or expand their contents) to improve the page's organization and visibility. 

    - sections (articles) are the content itself. They are the text's linked to that specific Title and Categories. Clickin on sections(articles) button, the user will find a subtitle and another button to minimized or expand the content. 

    - related items are made by a title and a link. This link move the user to another page (provided by the external api, out from the app) to access content that could be familiar with the subject they are searching.


## Assumptions and Technical Desicions

- TypeScript: Althought I've asked and was allowed to write the code in JavaScript, as it is much more familiar and confortable to me, i've decided to use TypeScript. The daily routine of a software engineer is full of challanges and more important than to know the technologies itself(programming languages , frameworks, etc), is to know how to learn them (effectively and quickly) and be open to do it. 

- Landing Page: The app landing page starts blank, with no HealthTopics displayed, but only with the header, footer and search input. I know that this is not the best user experience, but myHealthFinderAPI is a little bit slow to responde. And I felt that render a initial content, making a get request would compromise the app's performance. 

- Autocomplete Search: 

    - There is many ways to implement a autocomplete search. Also, there is good frameworks that helps too, as Material UI. But I've decided to do it by myself, as I wanted to learn more about it and understand its whole process. 

    - To created the autocomplete search **suggestions**: i've assumed that the search by keyword performed by myHealthFinderApi is guided by the words contained inside the Topics and Categories. Those can be retrieve by acessing the `itemlist.json` endpoint. So, i'm requesting data from this endpoint to create the suggestions. 

    - I've found two ways to implement the autocomplete search. The first one would be by performing multiple API's requests during the user's typing process; And the second one would be by fetching data in the app initial render. Both have cons and pros, but for this project i've decided for the second option, as myHealthFinderApi is very slow to respond and the amount of data that it retrieves is not big. So, from my understanding, the app performance is less compromised if we choose the second option for this app. 

- Input Search: Based on the way I've decided to implement the autocomplete search and considering the time response of the external API, to avoid problems when the user types too fast, i've deactivated the inputSearch in the app initial render. It will be activated, once the fetch data to generate the suggestions is done. Again, is not the best user experience, but is better than problems when typing. 

- Display healthTopic's card: some healthTopics could be very extensive. Based on that, I've chosen to implement expand/minimized buttons to Related Items and Sections. They all starts minimize and the user choose to open. 

- Sections(articles) button name: I've decided to call this button as "Sections(articles)", because the assessment has the explicit requeriment to display "Sections" on the page, and I wanted to make clear that they are there. But, thinking about the User's perspective I thought would be more understable to called as "Articles". 

- Style: Althought it was not required, to let things easier to be seen I've applied some basic Bootstrap classes.

- Testing: all the core functionalities were tested. 

## Improvements

- Create Hooks for fetching data.
- End-to-End test with Cypress
- Continuous Integration: create a pipeline using CircleCI. 


