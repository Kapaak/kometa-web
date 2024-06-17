import styled from 'styled-components';

export const MobileAvailableCoursesTableError = styled.div`
  display: grid;
  height: 30rem;
  place-items: center;
`;

export const MobileAvailableCoursesTable = styled.div`
  display: grid;
  margin-bottom: 2rem;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(29rem, 1fr));
`;
