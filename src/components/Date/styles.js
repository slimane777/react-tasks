import styled from 'styled-components';

export const Day = styled.p`
  font-size: 1.5em;
  color: #5554e7;
  width: fit-content;
  text-transform: Capitalize;
  font-weight: ${props => props.weight};
  display: inline;
`; 

export const Row = styled.div`
    flex-direction: row;
`;

export const Month = styled.p`
    font-size: 1em;
    font-weight: 600;
    color: #c0bad2;
    margin-top: 5px;
`;

export const Wrapper = styled.div`
    text-align: left;
    width: fit-content;
    flex: 1;
`;