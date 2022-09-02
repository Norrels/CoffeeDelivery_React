import styled from "styled-components";


export const SucessWrapper = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;

`

export const TextContainer = styled.div`  
    width: 100%;
    max-width: 75rem;
    margin-top: 4rem ;
    
    h1 {
        font-size: 2rem;
        font-weight: 800;
        color: ${(props) => props.theme['yellow-dark']};
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-subtitle']};
    }
`

export const SucessContainer = styled.section `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 75rem;
    margin-top: 3.5rem;
`

export const InfoContainer = styled.section`
    border: 1px solid ${(props) => props.theme['purple']};
    border-radius: 6px 36px 6px 36px;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
   width: 32.875rem;
`

export const InfoContext = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    p{
        font-family: 'Roboto', sans-serif;
    }
`