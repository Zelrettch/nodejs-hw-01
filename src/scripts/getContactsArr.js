import { readContacts } from '../utils/readContacts.js';
export const getContactsArr = async () => {
  try {
    return JSON.parse(await readContacts());
  } catch (e) {
    console.log('Error: ', e);
  }
};
