import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`
  /* margin: 32px 16px;
  display: flex;

  input[type="color"] {
    padding: 0 0 0 56px;
    border-radius: 5px;
    border: solid;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin: auto;
  }

  ul {
    margin-left: 50px;
    font-size: 36px;
  } */

  position: relative; 
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

export const FormLabel = styled.label`
  font-size: 18px;
  margin-bottom: 16px;  
`;

FormLabel.Text = styled.span`

  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
  
`;

export const Input = styled.input`  
  /* border-radius: 5px;
  width: 350px;
  height: 40px;
  
  resize: none;
  border-width: 0 0 4px 0;  
    
  &:focus {
    border-bottom-color: var(--primary);
  }

  transition: 0.3s;

  @media (max-width: 800px) {
    width: 80vw;
    height: 35px
  }

  ${({ hasValue }) => hasValue && css`
    background: var(--primary)
  `}; */

  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-10px);
  }
  ${({ hasValue }) => hasValue && css`
    &:not([type="color"]) + span {
      transform: scale(.6) translateY(-10px);
    }
  `}

`;
