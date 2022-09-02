import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 1.8rem ;
    padding: 1.5rem 0;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};

    strong{
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']};
    }
`

export const TextContainer = styled.article`
    display: flex;
    gap: 1.8rem;
   

    img {
        width: 4rem;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.8rem;
    margin-top: 0.5rem;

    span{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        background-color: ${(props) => props.theme['base-button']};

        button {
            color: ${(props) => props.theme['purple']};
            border: none;
            padding: 0 0.5rem;
        }
    }

    
`

export const RemoveButton = styled.button`
    display : flex;
    gap: 0.3rem;
    flex-direction: row;
    align-items: center;
    border: none;
    padding: 0.3rem;
    border-radius: 6px;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
`