import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart} from 'phosphor-react'
import { HeaderContainer, HeaderContent, OrderNumber } from "./style";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";


export function Header() {
    const { order } = useContext(OrderContext)

    return (
       <HeaderContainer>
         <HeaderContent>
            <span>
                <img src={logo} alt="" />
            </span>
            <nav>
                <div>
                    <MapPin size={27} color='#8047F8' weight="fill"/>
                    Cotia, SP
                </div>
                <NavLink to="/carrinho">
                    <ShoppingCart size={27} color='#C47F17' weight="fill"/>
                    {order.length > 0 && <OrderNumber>{order.length}</OrderNumber>}
                </NavLink>
            </nav>
        </HeaderContent>
       </HeaderContainer>


    )
}