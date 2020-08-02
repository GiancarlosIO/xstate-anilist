/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import styled from 'styled-components';
import { Interpreter } from 'xstate';

import Autocomplete from '@material-ui/lab/Autocomplete';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Clear from '@material-ui/icons/Clear';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import { Events, Context, EVENT_TYPE } from '../../machine';

import { filters } from './filters-data';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
`;

const Filters: FC<{
  filterSelected: Context;
  sendEvent: Interpreter<Context, any, Events>['send'];
}> = ({ filterSelected, sendEvent }) => {
  const onChangeFilter = filterKey => (_, value) => {
    sendEvent({
      type: `SET_${filterKey.toUpperCase()}` as EVENT_TYPE,
      value,
    });
  };

  return (
    <Container className="h-auto w-full ">
      {filters.map(filter => {
        const isFormatFilter = filter.key === 'format';

        return (
          <Autocomplete
            multiple={isFormatFilter}
            limitTags={1}
            key={filter.key}
            options={filter.values}
            getOptionLabel={option => option.label}
            defaultValue={isFormatFilter ? [] : undefined}
            filterSelectedOptions
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label={filter.label}
                placeholder=""
              />
            )}
            value={filterSelected[filter.key]}
            onChange={onChangeFilter(filter.key)}
          />
        );
      })}
    </Container>
  );
};

export default Filters;
