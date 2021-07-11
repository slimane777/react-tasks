import styled from 'styled-components';

export const InputWrapper = styled.div`
    display: flex;
    padding: 20px;
    margin-top: 5px;
    border-bottom: 1px solid #80808029;
`;

export const Container = styled.div`
    border-radius: 8px;
    background-color: white;
    max-width: 400px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    overflow: hidden
`;

export const Input = styled.input`
    color: #8683a0;
    border: none;
    font-size: 1.1em;
    font-weight: 700;
    outline: none;
    ::placeholder { 
        color: #8683a0;
        opacity: 0.8; 
        font-weight: 600;
    };
    height: 30px;
    flex: 1
`;

export const Button = styled.button`
    background-color: transparent;
    border: none
`;

export const TaskRow = styled.div`
    display: flex;
    padding: 15px 20px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? '#f6706d' : 'transparent'};
  border: ${props => props.checked ? 'none' : '1px solid lightgrey'};
  border-radius: 3px;
  transition: all 150ms;
`
export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer
`
export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const TaskLabel = styled.p`
    margin: 0;
    margin-left: 10px;
    flex: 1;
    color: #8683a0;
    font-size: 1.0em;
    font-weight: ${props => props.checked ? '700' : '500'};
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
    cursor: pointer
`;

export const TaskTime = styled.span`
    color: lightgrey;
    font-size: 0.8em;
    font-weight: 500
`;