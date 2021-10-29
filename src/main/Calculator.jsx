import React, { useState } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'

const initialState = {
  display: '0',
  clearDisplay: true,
  operation: null,
  values: [0, 0],
  index: 0
}
const Calculator = () => {
  const [state, setState] = useState(initialState)

  const clearMemory = () => setState(initialState)

  const setOperation = operation => {
    const index = state.index
    const number = +state.display
    const values = [...state.values]
    values[index] = number
    if (index === 0) {
      setState({ ...state, values, operation, clearDisplay: true, index: 1 })
    } else {
      const equals = operation === '='
      const currentOperation = state.operation
      values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
      values[1] = 0
      setState({ ...state, values, display: values[0], clearDisplay: !equals, operation: equals ? null : operation, index: equals ? 0 : 1 })
    }
  }

  const digitPressed = digit => {
    if (digit === '.' && state.display.includes('.')) return
    const currentValue = state.clearDisplay ? '' : state.display
    const nextDisplay = currentValue + digit
    setState({ ...state, display: nextDisplay, clearDisplay: false })
  }

  return (
    <>
      <h1>Calculadora</h1>
      <div className='Calculator'>
        <Display value={state.display} />
        <Button label='AC' triple click={clearMemory} />
        <Button label='/' operation click={setOperation} />
        <Button label='7' click={digitPressed} />
        <Button label='8' click={digitPressed} />
        <Button label='9' click={digitPressed} />
        <Button label='*' operation click={setOperation} />
        <Button label='4' click={digitPressed} />
        <Button label='5' click={digitPressed} />
        <Button label='6' click={digitPressed} />
        <Button label='-' operation click={setOperation} />
        <Button label='1' click={digitPressed} />
        <Button label='2' click={digitPressed} />
        <Button label='3' click={digitPressed} />
        <Button label='+' operation click={setOperation} />
        <Button label='0' double click={digitPressed} />
        <Button label='.' click={digitPressed} />
        <Button label='=' operation click={setOperation} />
      </div>
    </>
  )
}

export default Calculator
