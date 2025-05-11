import styled from 'styled-components';

export const FormContainer = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1rem 0;
`;

export const FormColumnItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
