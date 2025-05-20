import styled from 'styled-components';

export const PageLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: auto;
  min-height: inherit;

  //cant set overflow here, the position: sticky for child elements wouldnt work
  /* overflow: auto; */
`;
