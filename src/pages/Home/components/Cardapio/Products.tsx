import { ButtonAdd, PriceContainer, ProductsContainer, TagContainer } from "./style";

import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { coffeesProps } from "../../../../coffees";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";


interface products {
    coffee : coffeesProps
}

export function Products({coffee} : products) {
    const [amount, setAmount] = useState(1)
    const { order, addOnOrder } = useContext(OrderContext)

    const alreadyOnList = order.map(coffe => {
        if(coffee.id === coffe.id) {
            return true
        }
        return false
    })

    useEffect(() => {
       console.log(amount)
    }, [amount] )

    function handleIncreseAmount(){
        setAmount((state) => state + 1)
    }

    function handleDecreaseAmount(){
        amount > 1 && setAmount((state) => state - 1)
    }

    function handleAddOnOrder() {
        alreadyOnList ? 
        coffee.amount += amount :
        coffee.amount = amount
        addOnOrder(coffee)
        setAmount(1)
    }

    return (
        <ProductsContainer>
            <div>
                <img src={coffee.img} alt="" />
            </div>

            <TagContainer>
                {coffee.tags.map(tag => {
                    return <span key={tag}><p>{tag}</p></span>;
                })}
            </TagContainer>
         
            <strong>{coffee.name}</strong>

            <p>{coffee.description}</p>

            <PriceContainer>
                <p>R$ <strong>9,90</strong></p>
                <div>
                    <span> <button onClick={handleDecreaseAmount}><Minus size={14} weight="bold"/></button>{amount}<button onClick={handleIncreseAmount}><Plus size={14} weight="bold"/></button></span> 
                    <ButtonAdd onClick={handleAddOnOrder} ><ShoppingCart weight="fill" color="#FFF" size={20}/></ButtonAdd>
                </div>
            </PriceContainer>
        </ProductsContainer>
    )
}