// duplication is far cheaper than the wrong abstraction - Sandi Metz
// https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction
// Kent C Dodds - https://kentcdodds.com/blog/aha-programming
// Dan Abramov  - https://overreacted.io/the-wet-codebase/

const user = {
  firstName: 'Jay',
  lastName: 'Min',
  favouriteBand: 'Black Sabbath',
  favouriteMovie: 'Baby Driver',
  age: 33
}

const userOne = {
  firstName: 'Michael',
  lastName: 'Jordan',
  favouriteBand: 'Himself',
  favouriteMovie: 'Gladiator',
  age: 92
}

const userTwo = {
  firstName: 'Michael',
  lastName: 'Jackson',
  favouriteBand: null,
  favouriteMovie: null,
  age: 59
}

// CASE #1: no abstraction
const displayNameOnly = 'Jay Min'
const nameWithAge = 'Jay Min, 33'
const nameAndFavouriteMovie = 'Jay Min, favourite movie: Baby Driver'
// What happens if user name changes?

// CASE #2: hard coding is bad. it's time to program!
const userFullName = `${user.firstName} ${user.lastName}`
const displayNameWithAge = `${userFullName} ${user.age}`
const displayNameAndFavouriteMovie = `${userFullName}, favourite movie: ${user.favouriteMovie}`

// CASE #3: what if there is more than one user? abstraction comes to rescue!
const getFullUserName = (user) => `${user.firstName} ${user.lastName}`
const getUserNameWithAge = (user) => `${getFullUserName(user)} age: ${user.age}`
const userOneFullName = getFullUserName(userOne)
const userTwoFullName = getFullUserName(userTwo)