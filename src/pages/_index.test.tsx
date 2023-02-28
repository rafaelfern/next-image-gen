import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './index'

describe('Index tests', () => {

    it('should call an API', async () => {
        const response = await fetch('/api/generateImg')
        const data = await response.json
        expect(data).toBeDefined()
        expect(Array.isArray(data))
    })

    it('should call function', async () => {
        const getImage = jest.fn()
        const { getByTestId } = render(<Home />)
        fireEvent.click(getByTestId('btn-get'))
        expect(getImage).toHaveBeenCalled();
    })
})