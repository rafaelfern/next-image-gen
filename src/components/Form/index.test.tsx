import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Index from './index'
import '@testing-library/jest-dom'

import { IProps } from '.'

const setDesiredImgInput = jest.fn();
const getImage = jest.fn();

const inputProp: IProps = {
    desiredImgInput: "A black cat",
    setDesiredImgInput,
    getImage,
    disabled: true
}

describe('Input Component', () => {
    it('should render an input element with props', () => {
        const { getByTestId } = render(<Index {...inputProp}/>);
        
        const inputInp = getByTestId('input-prompt') 
        expect(inputInp).toBeInTheDocument();
    });

    it('Should update the value when the input is changed', () => {
        const { getByTestId } = render(<Index {...inputProp}/>);

        const input = getByTestId('input-prompt');

        fireEvent.change(input, { target: { value: 'test' } });
        expect(input.value).toBe('A black cat');
    })
})