import { ContactItem } from './Contact.styled';
import PropTypes from 'prop-types';

export function Contact({ element: { id, name, number }, delContact }) {
  return (
    <ContactItem>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={() => delContact(id)}>
        Delete
      </button>
    </ContactItem>
  );
}
Contact.propTypes = {
  element: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  delContact: PropTypes.func.isRequired
};
