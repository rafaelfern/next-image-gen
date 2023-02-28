import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import OptsCards from './index'
import { IOptsCardsProps } from '@/interfaces/optsCards'

const cardsProps: IOptsCardsProps = {
    id: 1,
    image: '/../assets/kid.webp',
    title: 'title 1',
    description: 'Alguma coisa'
}

describe("<OptsCards />", () => {
    it("should render the OptsCards correcty", () => {
        render(<OptsCards {...cardsProps} />)
        
        expect(screen.getByRole('img', { name: /title 1/i})).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /title 1/i})).toHaveAttribute('src', '/../assets/kid.webp');
        expect(screen.getByText('title 1')).toBeInTheDocument();
    })
})