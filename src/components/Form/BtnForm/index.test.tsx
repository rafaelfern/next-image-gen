import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Index from './index'

import { BtnProps } from '.'

const getImage = jest.fn();
const fakeFunc = jest.fn();

const props: BtnProps = {
    getImage,
    disabled: false,
    onClick: fakeFunc
}

describe('<Button />', () => {
    it("It should render a button with text 'Get Image' ", async () => {
        // const { getByTestId } = render(<Index {...props}/>)
        // expect(getByTestId('btn-get')).toBeDisabled()
        render(<Index {...props}/>)
        const button = screen.getByRole('button', { name: /get image/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('class', 'btnContent')
    })

    it("It should call function when button click ", async () => {

        render(<Index {...props}/>)
        const button = screen.getByRole('button', { name: /get image/i });
        // expect(getImage).toHaveBeenCalledTimes(0)
        fireEvent.click(button)
        // userEvent.click(button)
        expect(getImage).toHaveBeenCalledTimes(1)
    })

    it("It should be disabled when disabled is true", async () => {
        render(<Index {...props}/>)
        expect(screen.getByRole('button', { name: /get image/i })).toBeEnabled();
        
    })
})