import { useDispatch, useSelector } from 'react-redux';

import { selectFilterValue } from '../../redux/selectors';
import { setSearchFilterAction } from '../../redux/filter/filterSlice';
import { FilterContainer, Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectFilterValue);

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
