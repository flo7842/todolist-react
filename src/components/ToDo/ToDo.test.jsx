import { render, screen } from "@testing-library/react"
import ToDo from "./ToDo";


test('Render Component Todo', () => {
    const renderer = render(<ToDo/>);

    expect(renderer).toMatchSnapshot();
})