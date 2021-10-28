import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Checkbox from "../Checkbox/Checkbox";

test('Render Component Footer', () => {
    const renderer = render(<Checkbox />);

    expect(renderer).toMatchSnapshot();
})


test('double click', () => {
    
    render(<Checkbox />)
    const checkbox = screen.getByTestId("custom-element")
    userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    
})
