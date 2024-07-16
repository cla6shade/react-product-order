import styled from '@emotion/styled';
import Container from '@components/atoms/container/Container';
import { BREAKPOINT_SM } from '@styles/size';
import { RankFilter } from '@/types';

interface PopularityFilterProps {
  currentFilter: string;
  setPopularityFilter: (filter: RankFilter) => void;
}

const FilterButton = styled.div<{ selected: boolean }>`
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  border: none;
  border-radius: 10px;
  padding: 20px 30px;
  font-size: 22px;
  line-height: 22px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? 'rgb(70, 132, 233)' : 'rgba(70, 132, 233, 0.7)')};
  transition: color 200ms ease 0s, font-weight 200ms ease 0s;
  @media (max-width: ${BREAKPOINT_SM}) {
    font-size: 16px;
    padding: 13px 20px;
  }
`;

function RankFilterArea({ currentFilter, setPopularityFilter }: PopularityFilterProps) {
  const filterNames: { [key in RankFilter]: string } = {
    MANY_WISH: '받고 싶어한',
    MANY_RECEIVE: '많이 선물한',
    MANY_WISH_RECEIVE: '위시로 받은',
  };

  return (
    <Container
      justifyContent="center"
      cssProps={{
        marginTop: '16px',
      }}
      backgroundColor="rgb(230, 241, 255)"
    >
      {(Object.keys(filterNames) as RankFilter[]).map((filter) => {
        const key = `popularityFilter-${filter}`;
        const filterName = filterNames[filter];

        return (
          <FilterButton
            key={key}
            selected={currentFilter === filter}
            onClick={() => setPopularityFilter(filter)}
          >
            {filterName}
          </FilterButton>
        );
      })}
    </Container>
  );
}

export default RankFilterArea;
