import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  padding-left: 25px;
  list-style: none;
`;

export const Item = styled.li`
  width: 225px;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Image = styled.img`
  display: block;
  width: 15vw;
  margin-bottom: 10px;
`;

export const CardTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Character = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const NoCast = styled.p`
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;