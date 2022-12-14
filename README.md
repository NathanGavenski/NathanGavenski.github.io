# Welcome to my Github Page 👋

My name is Nathan Gavenski, and I'm from Brazil. Currently I'm a PhD student in [King's College London](https://www.kcl.ac.uk/). I have worked for the last 8 years as Scrum Master, QA automation and analyst, Front-end developer, researcher, and visiting professor. My main interests are all research involving agents, teaching, photography, traveling, and music. Don't be shy to contact me!

This page is located at: https://nathangavenski.github.io/

---

I've created this page with [Create-React-App](https://create-react-app.dev/), [Bootstrap](https://getbootstrap.com/), and [Gh-Pages](https://github.com/tschaub/gh-pages). Feel free to clone, fork, and share this repository.

If you wish to use this repo, the [publications.js](https://github.com/NathanGavenski/NathanGavenski.github.io/blob/master/src/assets/publications.json) has all information regarding the Publications page. I did that so I could add new publications by just changing one file and not having to alter the HTML/JSX. However, I was too lazy to do the same for the Experiences page. This is on my ''todo'' list but could take some time. If you wish, feel free to implement and create a pull request 😅.

---

## The project is structured as follows:

```
project
│   README.md
│   package.json (dependencies)    
│
└───src
    │   App.js (main page)
    │   index.js (you don't need to change that)
    │
    └───assets
    |   │   avatar.jpg (picture from the home page)
    |   │   publications.json (list of all publications)
    |   │   experience.json (soon™)
    |
    └───components
    |   |   Experience (for easier experience creation - Row for the Experiences page)
    |   |   Navbar
    |   |   Publication (for easier publication creation - Row for the Publications page)
    |
    └───pages
    |   |   Experiences
    |   |   Home
    |   |   Publications
    |
    └───services
    |   |   NavigationService.json (ReactContext to keep track where the user is)
    |   |   PublicationsService.json (reads the json file)
    |   |   ThemeService.json (ReactContext to keep track of light/dark mode)
    |
    └───variables
        |   colors.scss (SCSS variables)

```

---

## Running locally

```
npm install && npm start
```

---

## TODO

- [ ] Save theme so the user doesn't has to change theme everytime it enters
- [ ] Create a `experience.json`
