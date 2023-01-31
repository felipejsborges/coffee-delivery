import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { Coffee } from '../interfaces/coffee'
import produce from 'immer'
import { localStorageStateKey } from '../constants/storage'

interface State {
  coffeeList: Coffee[]
  cart: Coffee[]
  location: any
}
interface IAppContext extends State {
  handleChangeCoffeeQuantity: (
    id: string,
    type: 'increment' | 'decrement' | null,
    value?: number,
  ) => void
}

const AppContext = createContext({} as IAppContext)

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'fillCoffeeList': {
      return produce(state, (draft: any) => {
        draft.coffeeList = action.payload.coffees
      })
    }
    case 'addItemToCart': {
      return produce(state, (draft: any) => {
        const coffeeDetails = draft.coffeeList[action.payload.listIndex]
        coffeeDetails.quantity = 1
        draft.cart.push(coffeeDetails)
      })
    }
    case 'removeItemFromCart': {
      return produce(state, (draft: any) => {
        const { cartIndex, listIndex } = action.payload
        draft.cart.splice(cartIndex, 1)
        draft.coffeeList[listIndex].quantity = 0
      })
    }
    case 'incrementCoffeeQuantity': {
      return produce(state, (draft: any) => {
        const { cartIndex, listIndex } = action.payload
        draft.cart[cartIndex].quantity += 1
        draft.coffeeList[listIndex].quantity += 1
      })
    }
    case 'decrementCoffeeQuantity': {
      return produce(state, (draft: any) => {
        const { cartIndex, listIndex } = action.payload
        draft.cart[cartIndex].quantity -= 1
        draft.coffeeList[listIndex].quantity -= 1
      })
    }
    case 'updateCoffeeQuantity': {
      return produce(state, (draft: any) => {
        const { cartIndex, listIndex, value } = action.payload
        draft.cart[cartIndex].quantity = value
        draft.coffeeList[listIndex].quantity = value
      })
    }
    default:
      return state
  }
}

const initialStateValue: State = {
  coffeeList: [],
  cart: [],
  location: {},
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

  function handleReceiveCoffeeList(coffees: Coffee[]) {
    const parsedCoffees = coffees.map((coffee) => ({
      ...coffee,
      price: Number(coffee.price).toFixed(2).replace('.', ','),
      quantity: 0,
    }))
    dispatch({ type: 'fillCoffeeList', payload: { coffees: parsedCoffees } })
  }

  function handleChangeCoffeeQuantity(
    id: string,
    type: 'increment' | 'decrement',
    value?: number,
  ) {
    const listIndex = state.coffeeList.findIndex(
      (coffee: Coffee) => coffee.id === id,
    )
    const cartIndex = state.cart.findIndex((coffee: Coffee) => coffee.id === id)
    if (cartIndex < 0) {
      // coffee is not in cart
      if (type === 'increment') {
        dispatch({
          type: 'addItemToCart',
          payload: { listIndex },
        })
        return
      } else {
        // type === 'decrement'
        return
      }
    }
    // coffee is in cart
    if (
      (state.cart[cartIndex].quantity === 1 && type === 'decrement') ||
      value === 0
    ) {
      dispatch({
        type: 'removeItemFromCart',
        payload: { cartIndex, listIndex },
      })
      return
    }
    if (value) {
      dispatch({
        type: 'updateCoffeeQuantity',
        payload: { cartIndex, listIndex, value },
      })
      return
    }
    if (type === 'increment') {
      dispatch({
        type: 'incrementCoffeeQuantity',
        payload: { cartIndex, listIndex },
      })
      return
    }
    dispatch({
      type: 'decrementCoffeeQuantity',
      payload: { cartIndex, listIndex },
    })
  }

  useEffect(() => {
    fetch('/api/coffees')
      .then((response) => response.json())
      .then((json) => handleReceiveCoffeeList(json.coffees))
  }, [])

  useEffect(() => {
    localStorage.setItem(localStorageStateKey, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChangeCoffeeQuantity,
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
