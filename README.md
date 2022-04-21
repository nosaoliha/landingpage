# Landing Page Project

This project will show you how to **manipulate the DOM** in real-world situations. The feature is used to accomplish two goals:
1. Appending dynamically added data to the DOM.
2. Demonstrating how javascript may improve the usability of a static site.

Use the `.zip` file supplied or visit my [Github Repository](https://github.com/nosaoliha/landingpage.git) to open and view the project.

Github hosts the project as well.

## What You Will Build?

A multi-section landing page.

## Project Files

You can obtain the project code by modifying the `js/app.js` file, as well as modifications to the index.html and `css/styles.css` files to further update and customize your project.

The starter project can be downloaded from [here](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page).

## Tools Required
No additional tools are required apart from a text-editor of your choice. *e.g Notepad++*.

## Installation
No installation is required for this project

## Instructions
The starter code has an **HTML** and **CSS** files to display a static version of the Landing Page project. You will need to convert this project from a static project to an interactive one. This will require modifying the **HTML** and **CSS** files, but primarily the **JS** file.

To get started, open `js/app.js` and start building out the app's functionality.

## Development
First of all, build the navbar dynamically based on the sections of the page. This can be achieved by using the below mentioned methods of javascript

`document.getElementById`
`document.createElement`
`.setAttribute`
`.appendChild`

Next step would be to add functionality to distinguish the section in view. This can be achieved by using the `.getBoundingClientRect()` method of javascript. Active states have to be added to the sections as well as the corresponding nav-links.

Last part is to add the functionality to scroll to sections. This can be achieved by using the below mentioned methods of javascript

`scroll(), scrollBy(), and scrollIntoView()`

## Features
Active state change for sections and nav links as user scrolls the viewport
Smooth scrolling using `scrollIntoView` when a nav link is clicked

## Running the App
Open the project through the `.zip` file provided and extract the files.

Open *index.html* in the browser of your choice.

## References
To check if an element is in Viewport or not from vanillajstoolkit
To handle the scrolling part, I have used scrollIntoView()
