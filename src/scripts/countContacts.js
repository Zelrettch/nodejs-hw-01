import { getContactsArr } from './getContactsArr.js';

export const countContacts = async () => {
  const contacts = await getContactsArr();
  return contacts.length;
};

console.log(await countContacts());
