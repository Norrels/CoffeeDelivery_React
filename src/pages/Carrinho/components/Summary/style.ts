import styled from "styled-components"

export const SummartCointainer = styled.section`
    max-width: 28rem;
    width: 100%;
    margin-top: 3rem;
    font-family: 'Roboto', sans-serif;
`

export const SummaryContent = styled.section`
    width: 100%;
    margin-top: 1.5rem;
    padding: 1rem 2rem 2rem 2rem;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px 44px 6px 44px;
`

export const ConfirmButton = styled.button`
    width: 100%;
    background-color: ${(props) => props.theme['yellow']};
    border: none;
    border-radius: 6px;
    margin-top: 1rem;
    padding: 0.7rem;

    font-size: 0.875rem;
    font-weight: 800;
    color: ${(props) => props.theme['white']};

    cursor: pointer;

&:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
}
`

export const PriceContainer = styled.div`
   padding-top: 1rem;
`

export const TextContent = styled.span `
    display: flex;
    font-size: 0.875rem;
    justify-content: space-between;
    color: ${(props) => props.theme['base-text']};

    p {
        margin-bottom: 0.6rem;
    }

    strong {
        font-size: 1.25rem;
        margin-bottom: 0.6rem;
    }
`