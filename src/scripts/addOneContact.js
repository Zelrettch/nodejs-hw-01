import { createFakeContact } from '../utils/createFakeContact.js';
import { getContactsArr } from './getContactsArr.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contacts = await getContactsArr();
  contacts.push(createFakeContact());
  await writeContacts(JSON.stringify(contacts));
};

addOneContact();
