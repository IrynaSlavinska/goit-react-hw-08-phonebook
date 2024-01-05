import { useDispatch, useSelector } from 'react-redux';

import { selectFilterValue } from '../../redux/selectors';
import { setSearchFilterAction } from '../../redux/filter/filterSlice';
import { FilterContainer, Label, Input } from './Filter.styled';

export const Filter = () => {
  const { filter } = useSelector(selectFilterValue);
  const dispatch = useDispatch();

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
    </FilterContainer>
  );
};
