import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  await writeContacts(JSON.stringify([]));
};

removeAllContacts();
