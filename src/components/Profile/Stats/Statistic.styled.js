import styled from 'styled-components';

export const StyledContainer = styled.ul`
  background-color: #f3f6f9;
  display: flex;
`;

export const StatsUnit = styled.li`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  border: 1px solid ${p => p.theme.colors.border};
  width: 33%;
  display: flex;
  gap: ${p => p.theme.space[1]}px;
  flex-direction: column;

  span {
    color: ${p => p.theme.colors.secondaryText};
    :last-child {
      color: ${p => p.theme.colors.primaryText};
      font-weight: bold;
    }
  }
`;
