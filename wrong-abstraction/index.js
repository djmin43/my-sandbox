// duplication is far cheaper than the wrong abstraction - Sandi Metz
// https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction
// Kent C Dodds - https://kentcdodds.com/blog/aha-programming
// Dan Abramov  - https://overreacted.io/the-wet-codebase/

const userName = {
  first: 'Jay',
  last: 'Min',
  favouriteBand: 'Black Sabbath',
  favouriteMovie: 'Baby Driver',
  age: 33
}

// CASE #1: no abstraction

const displayNameOnly = 'Jay Min'
const displayNameWithAge = 'Jay Min, 33'
const displayNameAndFavouriteMovie = 'Jay Min, favourite movie: Baby Driver'
// What happens if user name changes?

// CAASE #2: hard coding is bad. 

const displayNameOnly = 