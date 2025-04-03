import { createFakeContact } from '../utils/createFakeContact.js';
import { getContactsArr } from './getContactsArr.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await getContactsArr();
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }
  await writeContacts(JSON.stringify(contacts));
};

await generateContacts(5);
