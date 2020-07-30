import styled from "styled-components"

export const FormWrapper = styled.div`
    margin: 32px 16px;
    display: flex;

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

export const FormInput = styled.input`
    border-radius: 5px;
    width: 350px;
    height: 40px;

    @media (max-width: 800px) {
        width: 80vw;
        height: 35px
    }
`;

export const FormTextArea = styled.textarea`
    border-radius: 5px;
    width: 350px;
    height: 40px;

    @media (max-width: 800px) {
        width: 80vw;
        height: 35px
    }

`;




