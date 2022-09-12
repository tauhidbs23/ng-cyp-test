import {faker} from '@faker-js/faker';

const getName = {
  name: faker.name.firstName().toLowerCase()
}

const getFirstName = {
  name: faker.name.firstName().toLowerCase()
}
const getLastName = {
  name: faker.name.lastName().toLowerCase()
}

const getUserName = {
  userName: `${getName.name}.${faker.internet.userName()}`
}

export const fakeUser = {
  name: getName.name,
  firstName: getFirstName.name,
  lastName: getLastName.name,
  userName: getUserName.userName,
  email: `${getUserName.userName}@yopmail.com`.toLowerCase(),
  phoneNumber: faker.phone.number('+1868#######'),
  phoneWithoutCode: faker.phone.number('#######'),
  website: `www.${getUserName.userName}.com`.toLowerCase()
}
