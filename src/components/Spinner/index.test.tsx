import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from './index'

describe("<Spinner />", () => {
    it('Should render Spinner', () => {
        const { getByTestId } = render(<Index />)
        // expect(getByTestId('mosaic-loading')).toBeInTheDocument()
        // expect(queryByTestId('mosaic-loading')).toBeInTheDocument()
        // const mosaicLoading = screen.getBy

    })
})