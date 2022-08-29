import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  text-align: center;
  padding-top: ${p => p.theme.space[4]}px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
