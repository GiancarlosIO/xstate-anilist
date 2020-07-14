import React, { FC } from 'react';
import styled from 'styled-components';
import { Interpreter } from 'xstate';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Clear from '@material-ui/icons/Clear';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { Events, Context } from '../../machine';

import { filters } from './filters-data';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;

const Filters: FC<{
  filterSelected: Context;
  sendEvent: Interpreter<Context, any, Events>['send'];
}> = ({ filterSelected, sendEvent }) => {
  const onChangeSelect = filterKey => event => {
    sendEvent({
      type: `SET_${filterKey.toUpperCase()}`,
      value: event.target.value,
    });
  };

  console.log({ filterSelected });

  return (
    <Container className="h-auto w-full ">
      {filters.map(filter => {
        return (
          filter.values && (
            <FormControl key={filter.key}>
              <FormHelperText>{filter.label}</FormHelperText>
              <Select
                onChange={onChangeSelect(filter.key)}
                labelId="key"
                value={filterSelected[filter.key] || ''}
                IconComponent={
                  filterSelected[filter.key]
                    ? () => {
                        return (
                          <Clear
                            onClick={event => {
                              event.preventDefault();
                              // TODO!!
                              console.log('clear');
                            }}
                          />
                        );
                      }
                    : ArrowDropDownIcon
                }
              >
                <MenuItem value={undefined} />
                {filter.values.map(filterItem => {
                  return (
                    <MenuItem key={filterItem.value} value={filterItem.value}>
                      {filterItem.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          )
        );
      })}
    </Container>
  );
};

export default Filters;
