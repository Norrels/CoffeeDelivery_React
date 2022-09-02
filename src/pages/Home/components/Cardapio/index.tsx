import { Products } from "./Products";
import { CardapioContainer} from "./style";
import { coffees } from '../../../../coffees'

export function Cardapio() {
    return (
        <CardapioContainer>
            <h1>Nossos Café</h1>

            <section>
                {
                    coffees.map(coffee => {
                        return (
                            <Products
                                key={coffee.id}
                                coffee={coffee}

                            />
                        )
                    })
                }
            </section>
        </CardapioContainer>
    )
}