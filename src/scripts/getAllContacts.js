import { getContactsArr } from './getContactsArr.js';

export const getAllContacts = async () => {
  return getContactsArr();
};

console.log(await getAllContacts());
