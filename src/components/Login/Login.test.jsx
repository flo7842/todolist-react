import { render, screen } from "@testing-library/react"
import Login from "./Login";

test('Render the Checkbox component', () => {
    const renderer = render(<Login />)

    expect(renderer).toMatchSnapshot()
})

