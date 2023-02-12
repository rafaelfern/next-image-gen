import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from './index'

import { BtnProps } from '.'

const getImage = jest.fn();
// const handleClick = jest.fn();

const props: BtnProps = {
    getImage,
    disabled: true
}

describe('Button Component', () => {
    test('It should call onClick prop when clicked', async() => {
        
        const { getByTestId } = render(<Index {...props}/>)
        const button = getByTestId('btn-get');
        fireEvent.click(button);
        expect(getImage).toHaveBeenCalledTimes(1)
        // await waitFor(() => {
        //     expect(getImage).toHaveBeenCalledTimes(1)
        // })

    })
})