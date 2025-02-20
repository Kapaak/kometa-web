import styled from 'styled-components';

export const BreadcrumbsWrapper = styled.div`
  padding: 4rem 2rem;
`;

export const FoundersCupLayoutSectionMain = styled.main`
  //prevents adding horizontal overflow when on small screen
  // I was getting this horizontal scroll when I was on small screen, where was Y scroll visible
  //I wanted to achieve max-width: calc(100vw - 4rem) and this prevented me from doing it
  overflow: auto;
`;
