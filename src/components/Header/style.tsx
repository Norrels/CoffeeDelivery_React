import styled from "styled-components"

export const HeaderContainer = styled.header`
    width: 100%;

    display: flex;
    justify-content: center;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 2em 0rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        gap: 1rem;

        a, div {
            padding: 0.5rem;
            border-radius: 8px;
            background-color: ${(props) => props.theme['yellow-light']};

            display: flex;
            align-items: center;

            position: relative;
        }

        div {
            color: ${(props) => props.theme['purple']};
            background-color: ${(props) => props.theme['purple-light']};
        }
    }
`

export const OrderNumber = styled.span`
    position: absolute;
    font-size: 0.8rem;
    width: 1.4rem;
    height: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -8px;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 99999px;
    right: -9px;
`