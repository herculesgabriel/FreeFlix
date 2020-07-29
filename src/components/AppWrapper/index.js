import styled from 'styled-components';

export const AppWrapper = styled.div`
  min-height: 100vh;  
  display: flex;  
  flex-direction: column;
  
  background: var(--grayDark);

  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`