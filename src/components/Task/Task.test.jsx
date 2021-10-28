import { render, screen } from "@testing-library/react"
import Task from "./Task";

test('Render the Checkbox component', () => {
    const renderer = render(<Task />)

    expect(renderer).toMatchSnapshot()
})
