import styled from "styled-components"

export const HeaderContainer = styled.header`
    width: 100%;

    display: flex;
    justify-content: center;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 2em 8rem;

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
        }

        div {
            color: ${(props) => props.theme['purple']};
            background-color: ${(props) => props.theme['purple-light']};
        }
    }
`