import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart} from 'phosphor-react'
import { HeaderContainer, HeaderContent } from "./style";


export function Header() {
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
                </NavLink>
            </nav>
        </HeaderContent>
       </HeaderContainer>


    )
}