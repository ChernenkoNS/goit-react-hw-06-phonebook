// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/phoneBookReducer';
import css from '../Filter/Filter.module.css';

export const Filter = () => {
  const filter = useSelector(state => state.phoneBook.filter);

  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.currentTarget.value;
    dispatch(setFilter(value));
  };

  return (
    <label className={css.filter}>
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string
// };
