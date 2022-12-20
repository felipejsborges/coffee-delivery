import {
  HomeContainer,
  IntroContainer,
  Description,
  TitleContainer,
  ItemsContainer,
  ItemContent,
  IconContainer,
  CoffeeListContainer,
  CoffeeList,
  CoffeeImage,
} from './styles'
import coffeeImage from '../../assets/coffee-cup.svg'
import {
  ShoppingCart,
  Package,
  Timer,
  Coffee as CoffeeIcon,
} from 'phosphor-react'
import { CoffeeCardCatalog } from '../../components/CoffeeCardCatalog'
import { Coffee } from '../../interfaces/Coffee'
import { useEffect, useState } from 'react'

export function Home() {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  function parseCoffees(coffees: Coffee[]) {
    const parsedCoffees = coffees.map((coffee) => ({
      ...coffee,
      price: Number(coffee.price).toFixed(2).replace('.', ','),
    }))
    setCoffees(parsedCoffees)
  }

  function handleChangeCoffeeQuantity(
    id: string,
    type: 'increment' | 'decrement',
  ) {
    const coffeeIndex = coffees.findIndex((coffee) => coffee.id === id)
    const coffee = coffees[coffeeIndex]
    if (type === 'increment') {
      coffee.quantity += 1
    } else if (type === 'decrement') {
      coffee.quantity -= 1
    }
    const newCoffees = [...coffees]
    newCoffees[coffeeIndex] = coffee
    setCoffees(newCoffees)
  }

  function handleAddToCart() {}

  useEffect(() => {
    fetch('/api/coffees')
      .then((response) => response.json())
      .then((json) => parseCoffees(json.coffees))
  }, [])

  return (
    <HomeContainer>
      <IntroContainer>
        <Description>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleContainer>
          <ItemsContainer>
            <ItemContent>
              <IconContainer type="ShoppingCart">
                <ShoppingCart />
              </IconContainer>
              <span>Compra simples e segura</span>
            </ItemContent>
            <ItemContent>
              <IconContainer type="Package">
                <Package />
              </IconContainer>
              <span>Embalagem mantém o café intacto</span>
            </ItemContent>
            <ItemContent>
              <IconContainer type="Timer">
                <Timer />
              </IconContainer>
              <span>Entrega rápida e rastreada</span>
            </ItemContent>
            <ItemContent>
              <IconContainer type="CoffeeIcon">
                <CoffeeIcon />
              </IconContainer>
              <span>O café chega fresquinho até você</span>
            </ItemContent>
          </ItemsContainer>
        </Description>
        <CoffeeImage src={coffeeImage} alt="coffee image" />
      </IntroContainer>
      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCardCatalog
              key={coffee.id}
              onChangeInputNumber={handleChangeCoffeeQuantity}
              {...coffee}
            />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
