import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
`;
