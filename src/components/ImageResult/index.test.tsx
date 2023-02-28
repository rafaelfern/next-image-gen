import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from './index'

import { IProps } from '.'

const inputProp: IProps = {
    dataResult: ""
  }

describe("Image component", () => {
    it("Should render an image with the correct src", () => {
        render(<Index {...inputProp}/>)
        const displayedImage = document.querySelector("img") as HTMLImageElement
        expect(displayedImage.src).toContain("")
    })

    // it("should contains correct alt value", () => {
    //     const { getByTestId } = render(<Index {...inputProp} />)
    //     expect(getByTestId('img-content')).toContain('Desired image generated')
    // })

    it("Should has correct width and height", () => {
        const { getByTestId } = render(<Index {...inputProp} />)
        expect(getByTestId('img-content')).toHaveAttribute("width", "500")
        expect(getByTestId('img-content')).toHaveAttribute("height", "500")
    })
})