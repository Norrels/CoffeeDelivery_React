import styled from "styled-components"

export const HomeHeaderContainer = styled.main`
    width: 100%;
    margin-top: 4rem;

    display: flex;
    justify-content: center;
    gap: 4rem;
`

export const HomeHeaderContent = styled.div`
    width: 100%;
    max-width: 1100px;

    display: flex;
`

export const TextContent = styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    h1 {    
        line-height: 130%;
        font-weight: 800;
        font-size: 3rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 130%;
    }

    div {
        margin-top: 4rem;

        display: grid;
        grid-template-columns: 1fr 1fr;

        span {
            margin-bottom: 1rem;
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            font-weight: 400;
        }
    }
`

const STATUS_COLORS = {
    cart: 'yellow-dark',
    package: 'base-text',
    timer: 'yellow',
    coffee: 'purple',
} as const

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS
}

export const IconContainer = styled.span<StatusProps>`
    display: flex;
    gap: 0.6rem;
    align-items: center;

    svg{
        padding: 0.4rem;
        border-radius: 99999px;
        background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    }       
   
`
