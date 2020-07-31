import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin: 32px 16px;
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
  }    
`;

export const FormLabel = styled.label`
  font-size: 18px;
  margin-bottom: 16px;  
`;

FormLabel.Text = styled.span`
  
`;

export const Input = styled.input`  
  border-radius: 5px;
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
`;
