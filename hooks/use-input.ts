
import { useReducer } from 'react'
type InputType = {
  value: string,
  isTouched: boolean
}
export type InputHookType = {
  value: string,
  isValid: boolean,
  hasError: boolean,
  onChangeHandler: () => {},
  onBlurHandler: () => {},
  resetInputHandler: () => {},
  setValueHandler?: (value: string) => {}
}
const initialInputState: InputType = {
  value: '',
  isTouched: false
}
const inputStateReducer = (state: InputType, action: any) => {
  if (action.type === 'SET_VALUE')
    return {
      value: action.value,
      isTouched: true
    }
  if (action.type === 'BLUR')
    return {
      value: state.value,
      isTouched: true
    }
  if (action.type === 'RESET')
    return initialInputState
  return initialInputState
}
const useInput = (validateValueFun: (value: string) => {}, defaultValue ?: string) => {

  initialInputState.value = defaultValue || ''
  const [inputState, dispatchInput] = useReducer(inputStateReducer, initialInputState)
  const isValid = validateValueFun(inputState?.value) as boolean
  const hasError = inputState.isTouched && !isValid
  // dispatchInput({ type: 'SET_VALUE', value: defaultValue })

  const setValueHandler = (value: string) => {
    dispatchInput({
      type: 'SET_VALUE',
      value
    })
  }
  const onChangeHandler = (e: any) => {
    console.log(e.target.value)
    dispatchInput({
      type: 'SET_VALUE',
      value: e.target.value,
    })
  }
  const onBlurHandler = (e: any) => {
    dispatchInput({ type: 'BLUR' })
  }
  const resetInputHandler = () => {
    dispatchInput({ type: 'RESET' })
  }
  return {
    value: inputState.value,
    hasError,
    isValid: isValid as boolean,
    onChangeHandler,
    onBlurHandler,
    resetInputHandler,
    setValueHandler,
  } as InputHookType
}

export default useInput;