import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  margin-left: 5px;
  text-decoration: none;
  color: #333;
`;
