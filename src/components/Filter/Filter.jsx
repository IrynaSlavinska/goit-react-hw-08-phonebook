import { useDispatch, useSelector } from 'react-redux';

import { selectFilterValue } from '../../redux/selectors';
import { setSearchFilterAction } from '../../redux/filter/filterSlice';
import {
  FilterContainer,
  Label,
  Input,
  SortContainer,
  SortButton,
} from './Filter.styled';

import { groupFilters } from '../../redux/group/groupFilters';
import { selectGroupFilters } from '../../redux/selectors';
import { setGroupFilters } from '../../redux/group/groupSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectFilterValue);

  const group = useSelector(selectGroupFilters);

  const handleGroupChange = group => dispatch(setGroupFilters(group));

  const filterChange = e => {
    dispatch(setSearchFilterAction(e.target.value));
  };

  return (
    <FilterContainer>
      <Label>
        Find contact
        <Input
          type="text"
          name="search"
          placeholder="Search..."
          value={filter}
          onChange={filterChange}
        />
      </Label>

      <SortContainer>
        <SortButton
          type="button"
          selected={group === groupFilters.all}
          onClick={() => handleGroupChange(groupFilters.all)}
        >
          All
        </SortButton>
        <SortButton
          type="button"
          selected={group === groupFilters.family}
          onClick={() => handleGroupChange(groupFilters.family)}
        >
          Family
        </SortButton>
        <SortButton
          type="button"
          selected={group === groupFilters.friends}
          onClick={() => handleGroupChange(groupFilters.friends)}
        >
          Friends
        </SortButton>
        <SortButton
          type="button"
          selected={group === groupFilters.work}
          onClick={() => handleGroupChange(groupFilters.work)}
        >
          Work
        </SortButton>
        <SortButton
          type="button"
          selected={group === groupFilters.others}
          onClick={() => handleGroupChange(groupFilters.others)}
        >
          Oters
        </SortButton>
      </SortContainer>
    </FilterContainer>
  );
};
