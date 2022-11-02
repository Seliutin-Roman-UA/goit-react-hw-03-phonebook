import { Search, Caption } from "./Filter.styled";
import PropTypes from 'prop-types';

export function Filter({ value, onChange, onClick }) {
  return (
    <div>
      <Caption>
        Find contact by name
        <div>
          <Search type="text" value={value} name="filter" onChange={onChange} />
          <button type="button" onClick={onClick}>
            x
          </button>
        </div>
      </Caption>
    </div>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};