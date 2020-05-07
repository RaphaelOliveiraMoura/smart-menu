import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';

import topics from '~/mocks/topics';

import Option from './Option';
import { Container } from './styles';

export default function CheckboxesTags({ id, label, placeholder, ...props }) {
  return (
    <Container {...props}>
      <Autocomplete
        id={id}
        multiple
        className="autocomplete"
        options={topics}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(option, { selected }) => (
          <Option title={option.title} selected={selected} />
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            className="textfield"
            variant="outlined"
            label={label}
            placeholder={placeholder}
          />
        )}
      />
    </Container>
  );
}

CheckboxesTags.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

CheckboxesTags.defaultProps = {
  placeholder: '',
  label: null,
};
