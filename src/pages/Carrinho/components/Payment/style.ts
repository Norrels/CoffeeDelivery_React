import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const FormularioContainer = styled.section`
    font-family: 'Roboto', sans-serif;
    max-width: 40rem;
    width: 100%;
    margin-top: 3rem;

    section {
        border-radius: 6px;
        margin-top: 1.5rem;
        background-color: ${(props) => props.theme['base-card']};
        padding: 2.5rem 2rem 3rem 2rem;
        border-radius: 6px;

        div{
            display: flex;
            flex-direction: row;
            gap: 1rem;
         
            margin-bottom: 2.2rem;

            span{
            line-height: 140%;
            }

            strong {
                font-size: 1rem;
                font-weight: normal;
            }
        }
    }
  
`

const INPUT = {
    cep: 'cep',
    rua: 'rua',
    numero: 'numero',
    complemento: 'complemento',
    bairro: 'bairro',
    cidade: 'cidade',
    uf: 'uf',
}

interface inputs {
    gridArea: keyof typeof INPUT
}

export const Input = styled.input<inputs>`
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    padding: 0.5rem 0.5rem;
    font-weight: normal;
    grid-area: ${(props) => props.gridArea};
    color: ${(props) => props.theme['base-title']};
    font-size: 0.875rem;
    border-radius: 4px;
   
`

export const InputsContainer = styled.article`
    display: grid;
    width: 100%;
    gap: 0.8rem;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    grid-template-areas:
       "cep . ." 
       "rua rua rua" 
       "numero complemento complemento"
       "bairro cidade uf"
    ;
`
export const PagamentoContainer = styled.article`
    padding: 2.5rem;
    border-radius: 6px;
    margin-top: 1rem;
    background-color: ${(props) => props.theme['base-card']};

    div {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        
        span{
            line-height: 130%;
        }

        strong{
            font-size: 1rem;
            font-weight: normal;
        }
    }
`
export const PaymentMethodButton = styled(RadioGroup.Item)`
    background-color: ${(props) => props.theme['base-button']};
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
    width: 3rem;
    font-size: 0.75rem;
    width: 11.125rem;
    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};
    cursor: pointer;

    &[data-state='unchecked']:hover {
        background-color: ${(props) => props.theme['base-hover']};
    }

    &[data-state='checked'] {
        outline: 1px solid ${(props) => props.theme['purple']};
        background-color: ${(props) => props.theme['purple-light']};
    }
`

export const MethodContainer = styled(RadioGroup.Root)`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`