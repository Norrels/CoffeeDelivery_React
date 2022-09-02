import styled from "styled-components";

export const CardapioContainer = styled.section`
    margin-top: 7rem;
    width: 100%;
    max-width: 1100px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-weight: bolder;
        font-size:  2rem;
    }

    section {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2%;
        margin-top: 4rem;
    }
`

export const ProductsContainer = styled.article`
    margin-bottom: 4rem;
    padding: 0 1.5rem 1.5rem 1.5rem;
    border-radius: 6px 36px 6px 36px;
    background-color: ${(props) => props.theme['base-card']};

    display: flex;
    gap: 0.6rem;
    flex-direction: column;
    align-items: center;
   
    img {
        margin-top: -2rem;
        width: 7.5rem;
    }
   
    strong {
        font-weight: 700;
        font-size: 1.25rem;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        text-align: center;
        line-height: 130%;
        color: ${(props) => props.theme['base-label']};
    }
`

export const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.6rem;

    span {

        p {
            font-family: 'Roboto', sans-serif;
            font-size: 0.625rem;
            font-weight: bold;
            border-radius: 99999px;
            padding: 6px;

            background-color: ${(props) => props.theme['yellow-light']};
            color: ${(props) => props.theme['yellow-dark']};
        }
} 
`

export const PriceContainer = styled.div`
    width: 100%;
    margin-top: 1rem;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   
   p {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
   }

   strong {
        font-family: 'baloo 2', sans-serif;
        font-weight: bolder;
        font-size: 1.5rem;
   }

    div {
        display: flex;
        gap: 0.4rem;

        span {
            background-color: ${(props) => props.theme['base-button']};
            font-size: 1rem;
            border-radius: 6px;
            font-family: 'Roboto', sans-serif;

            display: flex;
            align-items: center;
            gap: 0.5rem;
    
            button {
                border-radius: 6px;
                height: 100%;
                padding: 0 0.4rem;
                border: none;
                font-size: 1.6rem;
                background-color: ${(props) => props.theme['base-button']};

                display: flex;
                align-items: center;
               
                svg {
                    color: ${(props) => props.theme['purple']};;
                    transition: color 0.2s;
                
                    &:hover {        
                            color: ${(props) => props.theme['purple-dark']};
                    }
                }
            }
        } 
    }
    `

export const ButtonAdd = styled.button`
    background-color: ${(props) => props.theme['purple-dark']};
    padding: 0.4rem;
    border-radius: 6px;
    border: none;

    align-items: center;
    display: flex;

    &:hover {
        background-color: ${(props) => props.theme['purple']};
    }
`