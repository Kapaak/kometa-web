import styled from 'styled-components';

export const MobileAvailableCoursesTableError = styled.div`
  display: grid;
  height: 40rem;
  place-items: center;
`;

export const MobileAvailableCoursesTable = styled.div`
  display: grid;
  margin-bottom: 2rem;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
`;
