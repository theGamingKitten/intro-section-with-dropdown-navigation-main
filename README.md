# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

![](./screenshot.png)
![](./screenshot_mobile.png)

### Links

- [Source code](https://github.com/theGamingKitten/intro-section-with-dropdown-navigation-main)
- [Preview](https://intro-section-with-dropdown-navigation-main-six-chi.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - utility-first CSS framework
- [React Responsive](https://www.npmjs.com/package/react-responsive) - for getting the screen size


### What I learned

Toggling the menu based on screen size with react responsive:

```js
const isMobile = useMediaQuery({
    query: '(max-width: 426px)'
  })
  ...  
  // render the mobile menu with hidden links or the links themselves based on screen size
      {isMobile 
      ? <MobileMenu />         
      : <Links />
      }
```

### Continued development

- 

### Useful resources

- [W3schools](https://www.w3schools.com/howto/howto_js_dropdown.asp) - For creating the dropdown

## Author

- Frontend Mentor - [@theGamingKitten](https://www.frontendmentor.io/profile/theGamingKitten)