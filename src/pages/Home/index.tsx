import { Cardapio } from "./components/Cardapio";
import { HeaderHome } from "./components/HeaderHome/HeaderHome";
import { Wrapper } from "./style";

export function Home() {
    return (
        <Wrapper>
            <HeaderHome />
            <Cardapio />
        </Wrapper>
    )
}