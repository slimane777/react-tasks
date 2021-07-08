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
    max-width: 500px;
    margin: auto;
    margin-top: 100px;
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