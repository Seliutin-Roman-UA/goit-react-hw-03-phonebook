import { Contact } from 'components/Contact/Contact';
import { ContactList } from './ListContacts.styled';

import PropTypes from 'prop-types';

export function ListContacts({ filtredContacts, delContact }) {
  if (filtredContacts.length === 0) return <p>NOTHING IS FOUND</p>;
  return (
    <ContactList>
      {filtredContacts.map(el => (
        <Contact key={el.id} element={el} delContact={delContact} />
      ))}
    </ContactList>
  );
}

ListContacts.propTypes = {
  filtredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  delContact: PropTypes.func.isRequired,
};
