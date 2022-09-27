import expresso from "./assets/Expresso.svg"
import americano from "./assets/Americano.svg"
import expressoCremoso from "./assets/ExpressoCremoso.svg"
import expressoGelado from "./assets/CafeGelado.svg"
import cafeLeite from "./assets/CafeLeite.svg"
import latte from "./assets/Latte.svg"
import cappucino from "./assets/Cappucino.svg"
import macchiato from "./assets/Macchiato.svg"
import mocaccino from "./assets/Mocaccino.svg"
import chocolate from "./assets/ChocolateQuente.svg"
import cubano from "./assets/Cubano.svg"
import havaino from "./assets/Havaiano.svg"
import arabe from "./assets/Arabe.svg"
import irlandes from "./assets/Irlandes.svg"

export interface coffeesProps {
    id: string;
    name: string;
    tags: string[];
    description: string;
    price: number;
    img: string;
    amount: number;
}

export const coffees: coffeesProps[] = [
    {
        id: '1',
        name: 'Expresso Tradicional',
        tags: ['TRADICIONAL'],
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        img: expresso,
        amount: 0
    },
    {
        id: '2',
        name: 'Expresso Americano',
        tags: ['TRADICIONAL'],
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        img: americano,
        amount: 0
    },
    {
        id: '3',
        name: 'Expresso Cremoso',
        tags: ['TRADICIONAL'],
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        img: expressoCremoso,
        amount: 0
    },
    {
        id: '4',
        name: 'Expresso Gelado',
        tags: ['TRADICIONAL', 'GELADO'],
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
        img: expressoGelado,
        amount: 0
    },
    {
        id: '5',
        name: 'Café com Leite',
        tags: ['TRADICIONAL', 'COM LEITE'],
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
        img: cafeLeite,
        amount: 0
    },
    {
        id: '6',
        name: 'Latte',
        tags: ['TRADICIONAL', 'COM LEITE'],
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
        img: latte,
        amount: 0
    },
    {
        id: '7',
        name: 'Capuccino',
        tags: ['TRADICIONAL'],
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
        img: cappucino,
        amount: 0
    },
    {
        id: '8',
        name: 'Macchiato',
        tags: ['TRADICIONAL', 'COM LEITE'],
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        img: macchiato,
        amount: 0
    },
    {
        id: '9',
        name: 'Mocaccino',
        tags: ['TRADICIONAL', 'COM LEITE'],
        description: 'Café expresso com calda de chocolate, pouco leite e espumas',
        price: 9.90,
        img: mocaccino,
        amount: 0
    },
    {
        id: '10',
        name: 'Chocolate Quente',
        tags: ['ESPECIAL', 'COM LEITE'],
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        img: chocolate,
        amount: 0
    },
    {
        id: '11',
        name: 'Cubano',
        tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
        img: cubano,
        amount: 0
    },
    {
        id: '12',
        name: 'Havaiano',
        tags: ['ESPECIAL'],
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
        img: havaino,
        amount: 0
    },
    {
        id: '13',
        name: 'Árabe',
        tags: ['ESPECIAL'],
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        img: arabe,
        amount: 0
    },
    {
        id: '14',
        name: 'Irlandês',
        tags: ['ESPECIAL', 'ALCOÓLICO'],
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
        img: irlandes,
        amount: 0
    }
]