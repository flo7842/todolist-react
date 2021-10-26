import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Checkbox from "./Checkbox";


test('Render Component Footer', () => {
    const renderer = render(<Checkbox />);

    expect(renderer).toMatchSnapshot();
})


test('double click', () => {
    const onClick = jest.fn()
    render(<input type="checkbox" onClick={onClick} />)
    const checkbox = screen.getByRole('checkbox')
    userEvent.dblClick(checkbox)
    expect(onClick).toHaveBeenCalledTimes(2)
    expect(checkbox).not.toBeChecked()
})
