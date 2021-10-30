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
  age: 50
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

// CASE #3: abstraction!
const getUserInformation = (user) => {
  const userFullName = `${user.firstName} ${user.lastName}`
  return userFullName
}

const userOneInformation = getUserInformation(userOne)
const userTwoInformation = getUserInformation(userTwo)

console.log(userOneInformation)
console.log(userTwoInformation)

// CASE #4: time goes, the team wants to add extra feature. we want to know the user's age

const getUserInformationWithAge = (user) => {
  const userNameWithAge = `${user.firstName} ${user.lastName} ${user.age}`
  return userNameWithAge
}

// hmm.. according to DRY principle, it seems like I am repeaing user's first name and user's last name. let's refactor..

const getUserData = (user, type) => {
  const userFullName = `${user.firstName} ${user.lastName}`
  const userAge = `${user.age}`
  const userInformation = `${userFullName} ${userAge}`
  switch (type) {
    case 'nameOnly':
      return userFullName
    case 'userAge':
      return userAge
    case 'nameAndAge':
      return userInformation
    default:
      return
  }
}

console.log(getUserData(userOne, 'nameOnly')) // Michael Jordan
console.log(getUserData(userOne, 'userAge')) // 50
console.log(getUserData(userOne, 'nameAndAge')) // Michael Jordan 50

// CASE #5: cool.. now we want name and favourite band, or name and favourite movie. and.. we don't need name and age anymore.

// would you rather..
const getUserData = (user, type) => {
  const userFullName = `${user.firstName} ${user.lastName}`
  const userBand = `${user.favouriteBand}`
  const userMovie = `${user.favouriteMovie}`
  const userInformationWithBand = `${userFullName} ${userBand}`
  const userInformationWithMovie = `${userFullName} ${userMovie}`
  switch (type) {
    case 'nameOnly':
      return userFullName
    case 'userAge':
      return userAge
    case 'namdAndBand':
      return userInformationWithBand
    case 'namdAndMovie':
      return userInformationWithMovie
    default:
      return
  }
}

// or..?
const getUserName = (user) => `${user.firstName} ${user.lastName}`
const getUserNameAndBand = (user) => `${user.firstName} ${user.lastName} ${user.favouriteBand}`
const getUserNameAndMovie = (user) => `${user.firstName} ${user.lastName} ${user.favouriteMovie}`