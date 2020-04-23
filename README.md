# Friend Finder App

This website is similar to a dating or matching app. From the home page and default route, the user clicks on a button to take a ten question survey, ranking their level agreement with statements like 'I feel more energized after spending time with other people' from strongly agree (5) to strongly disagree (1). The user also enters a link to an image of themselves and their name. The database of friends is an array of objects containing name, photo url and survey answers within an array. Using a series of for loops, the difference between the users answer for question 1 and each friends answer for question 1 is calculated separately. Then, the differences for the 10 questions are summed for each friend as a total difference value, and this value is pushed to an array such that the index of the total difference value matches the index of the friend within the friend array. Another loop returns the index of the friend with the lowest total difference, and their information is displayed to the user throught a get request. A post request adds the friend to the database.

## Link to Deployed Site

[Friend Finder](https://stormy-cove-96412.herokuapp.com/)

## Built With

- [Heroku](https://www.heroku.com/) - platform to deploy live websites
- [Bootstrap](https://getbootstrap.com/) - a CSS library
- [Node](https://nodejs.org/en/) - a Javascript libary for backend logic, or for use outside a browser
- [Express](https://www.npmjs.com/package/express) - a node library for initiating servers and setting up routes
- [Path](https://www.npmjs.com/package/path) - a node library for handling paths/routes, important for when website is deployed
- [JQuery](https://jquery.com/) - a Javascript library
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - HyperText Markup Language used for structure
- [Unsplash Photos](https://unsplash.com) - internet source for photos

## Authors

- **Kate Jamboretz** - _Initial work_ - [katejamboretz](https://github.com/katejamboretz)
- **UCB Extension Full Stack Program** - _provide assignment objective, overall purpose of app, match questions and repository/file layout_

## Acknowledgments

- UC Berkeley Extension Full Stack Development 2020 Instructor, TAs and classmates
- [PurpleBooth README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- [Unsplash Photographers](https://unsplash.com) - names listed in image titles
