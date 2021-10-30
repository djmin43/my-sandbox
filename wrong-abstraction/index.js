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
  favouriteBand: 'Coldplay',
  favouriteMovie: 'Frozen',
  age: 59
}

// CASE #1: no abstraction
const displayNameOnly = 'Jay Min'
const nameWithAge = 'Jay Min, 33'
const nameAndFavouriteMovie = 'Jay Min, favourite movie: Baby Driver'
// What happens if user name changes?

// CASE #2: hard coding is bad. it's time to program!
const userFullName = `${user.firstName} ${user.lastName}`
const displayNameWithAge = `${user.firstName} ${user.lastName} age: ${user.age}`
const displayFullUserInformation = `${user.firstName} ${user.lastName}, favourite movie: ${user.favouriteMovie} age: ${user.age}`

console.log(displayFullUserInformation)

// CASE #3: abstraction!
const getFullUserInformation = (user) => {
  const displayFullUserInformation = `
    name: ${user.firstName} ${user.lastName},
    age: ${user.age}
    favourite movie: ${user.favouriteMovie}
    favourite band: ${user.favouriteBand}
    `
  return displayFullUserInformation
}

const userOneFullInformation = getFullUserInformation(userOne)
const userTwoFullInformation = getFullUserInformation(userTwo)

console.log(userOneFullInformation)
console.log(userTwoFullInformation)

// CASE #4: time goes, the team wants to add extra feature
