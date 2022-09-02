import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
