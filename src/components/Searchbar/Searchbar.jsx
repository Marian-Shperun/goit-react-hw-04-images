import Button from 'components/Button';
import { Formik } from 'formik';
import { BiSearch } from 'react-icons/bi';
import PropTypes from 'prop-types';

import { SearchbarEl, SearchForm, SearchInput } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    // resetForm();
  };
  return (
    <SearchbarEl>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <Button type="submit">
            <BiSearch />
          </Button>
          <SearchInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </SearchbarEl>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
