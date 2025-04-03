import { writeContacts } from '../utils/writeContacts.js';
import { getContactsArr } from './getContactsArr.js';

export const removeLastContact = async () => {
  const contacts = await getContactsArr();
  contacts.pop();
  writeContacts(JSON.stringify(contacts));
};

removeLastContact();
