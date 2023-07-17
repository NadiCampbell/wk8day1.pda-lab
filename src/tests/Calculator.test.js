import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add numbers', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);

    const plusOperator = container.getByTestId('operator-add');
    fireEvent.click(plusOperator);

    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);

    const equalOperator = container.getByTestId('operator-equals');
    fireEvent.click(equalOperator);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');

  })

  it ('should be able to subtract numbers', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);

    const subtractOperator = container.getByTestId('operator-subtract');
    fireEvent.click(subtractOperator);

    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);

    const equalOperator = container.getByTestId('operator-equals');
    fireEvent.click(equalOperator);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able to multiply numbers', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);

    const multiplyOperator = container.getByTestId('operator-multiply');
    fireEvent.click(multiplyOperator);

    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);

    const equalOperator = container.getByTestId('operator-equals');
    fireEvent.click(equalOperator);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should be able to divide numbers', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);

    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);

    const divideOperator = container.getByTestId('operator-divide');
    fireEvent.click(divideOperator);

    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);

    const equalOperator = container.getByTestId('operator-equals');
    fireEvent.click(equalOperator);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able to concatenate numbers', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1); 

    const button2 = container.getByTestId('number2'); 
    fireEvent.click(button2); 

    const button3 = container.getByTestId('number3'); 
    fireEvent.click(button3);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('123')
  })

  it('can chain multiple operators', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);

    const button0 = container.getByTestId('number0');
    fireEvent.click(button0);

    const addOperator = container.getByTestId('operator-add'); 
    fireEvent.click(addOperator); 

    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);

    const divideOperator = container.getByTestId('operator-divide'); 
    fireEvent.click(divideOperator); 

    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);

    const equalOperator = container.getByTestId('operator-equals');
    fireEvent.click(equalOperator); 

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should be able to clear running total without affecting calculation', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1); 

    const addOperator = container.getByTestId('operator-add');
    fireEvent.click(addOperator);

    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);

    const clearOperator = container.getByTestId('clear');
    fireEvent.click(clearOperator);

    const addOperator2 = container.getByTestId('operator-add'); 
    fireEvent.click(addOperator2);

    const button3 = container.getByTestId('number3');
    fireEvent.click(button3); 

    const equalOperator = container.getByTestId('operator-equals');
    fireEvent.click(equalOperator);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('4');
  })
})

