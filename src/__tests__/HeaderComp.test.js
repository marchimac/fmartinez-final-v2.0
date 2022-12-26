import { render, screen } from '@testing-library/react'
import HeaderComp from "../components/HeaderComp";

test('Localizar una clase', () => {
    render(<HeaderComp />)
    const tested = screen.getByTestId('tested')
    expect(tested).toHaveClass('m-3')
})