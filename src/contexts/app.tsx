import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import produce from 'immer'
import { localStorageStateKey } from '../constants/storage'
import { Coffee } from '../interfaces/coffee'
import { Address } from '../interfaces/address'
import { PaymentType } from '../interfaces/payment-type'
import { useNavigate } from 'react-router-dom'
import { Cart } from '../interfaces/cart'
import { numberToReal } from '../utils'

interface State {
  location: string
  address: Address
  paymentType: PaymentType
  coffeeList: Coffee[]
  cart: Cart
}
interface IAppContext extends State {
  onClickToDecreaseCoffeeQuantity: (id: string) => void
  onClickToIncreaseCoffeeQuantity: (id: string) => void
  onChangeInputQuantity: (id: string, quantity: number) => void
  goToCartPage: () => void
  onChangeAddress: (field: string, value: string) => void
  onChangePaymentType: (paymentType: PaymentType) => void
  onClickToRemoveCoffeeFromCart: (id: string) => void
}

const AppContext = createContext({} as IAppContext)

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'fillCoffeeList': {
      return produce(state, (draft: any) => {
        draft.coffeeList = action.payload.coffees
      })
    }

    case 'updateCoffeeQuantity': {
      return produce(state, (draft: any) => {
        const { id, index, quantity, addCoffeeToCart, removeCoffeeFromCart } =
          action.payload
        if (addCoffeeToCart) {
          draft.cart[id] = { ...state.coffeeList[index], quantity }
        }
        if (removeCoffeeFromCart) {
          delete draft.cart[id]
        } else {
          draft.cart[id].quantity = quantity
        }
        draft.coffeeList[index].quantity = quantity
      })
    }

    case 'changeAddress': {
      return produce(state, (draft: any) => {
        const { field, value } = action.payload
        draft.address[field] = value
      })
    }

    case 'changePaymentType': {
      return produce(state, (draft: any) => {
        draft.paymentType = action.payload.paymentType
      })
    }

    default:
      return state
  }
}

const initialStateValue: State = {
  location: 'Localize-se',
  address: {} as Address,
  paymentType: 'credit_card',
  coffeeList: [],
  cart: {},
}

function initializer() {
  const storageStateStr = localStorage.getItem(localStorageStateKey)
  const storageState = storageStateStr
    ? JSON.parse(storageStateStr)
    : initialStateValue
  return storageState
}

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialStateValue, initializer)

  const navigate = useNavigate()

  function changeCoffeeQuantity(id: string, quantity: number, index?: number) {
    if (quantity < 0 || quantity > 99) return
    const addCoffeeToCart = quantity > 0 && !state.cart[id]
    if (!Number.isInteger(index)) {
      index = state.coffeeList.findIndex((coffee: Coffee) => coffee.id === id)
    }
    const removeCoffeeFromCart = !!state.cart[id] && quantity === 0
    dispatch({
      type: 'updateCoffeeQuantity',
      payload: {
        id,
        index,
        quantity,
        addCoffeeToCart,
        removeCoffeeFromCart,
      },
    })
  }

  function decreaseCoffeeQuantity(id: string) {
    const index = state.coffeeList.findIndex(
      (coffee: Coffee) => coffee.id === id,
    )
    if (index < 0) return
    const quantity = (state.coffeeList[index].quantity || 0) - 1
    changeCoffeeQuantity(id, quantity, index)
  }

  function increaseCoffeeQuantity(id: string) {
    const index = state.coffeeList.findIndex(
      (coffee: Coffee) => coffee.id === id,
    )
    if (index < 0) return
    const quantity = (state.coffeeList[index].quantity || 0) + 1
    changeCoffeeQuantity(id, quantity, index)
  }

  function onChangeAddress(field: string, value: string) {
    dispatch({
      type: 'changeAddress',
      payload: {
        field,
        value,
      },
    })
  }

  function onChangePaymentType(paymentType: PaymentType) {
    dispatch({
      type: 'changePaymentType',
      payload: {
        paymentType,
      },
    })
  }

  function onClickToRemoveCoffeeFromCart(id: string) {
    changeCoffeeQuantity(id, 0)
  }

  function persistState() {
    localStorage.setItem(localStorageStateKey, JSON.stringify(state))
  }

  function goToCartPage() {
    navigate('/checkout')
  }

  async function getCoffeeList() {
    const response = await fetch('/api/coffees')
    const responseJson = await response.json()
    const rawCoffees = responseJson.coffees as Coffee[]
    const parsedCoffees = rawCoffees.map((coffee) => ({
      ...coffee,
      price: numberToReal(coffee.price),
    }))
    dispatch({ type: 'fillCoffeeList', payload: { coffees: parsedCoffees } })
  }

  useEffect(() => {
    getCoffeeList()
  }, [])

  useEffect(() => {
    persistState()
  }, [state]) // eslint-disable-line

  return (
    <AppContext.Provider
      value={{
        ...state,
        onClickToDecreaseCoffeeQuantity: decreaseCoffeeQuantity,
        onClickToIncreaseCoffeeQuantity: increaseCoffeeQuantity,
        onChangeInputQuantity: changeCoffeeQuantity,
        goToCartPage,
        onChangeAddress,
        onChangePaymentType,
        onClickToRemoveCoffeeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const appContext = useContext(AppContext)

  return appContext
}
