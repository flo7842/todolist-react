import { render, screen } from "@testing-library/react"
import Header from "./Header"


test('Print hello world', () => {
    const renderer = render(<Header/>);

    expect(renderer).toMatchSnapshot();
})