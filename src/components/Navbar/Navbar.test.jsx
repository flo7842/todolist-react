import { render, screen } from "@testing-library/react"
import Navbar from "./Navbar"


test('Print hello world', () => {
    const renderer = render(<Navbar/>);

    expect(renderer).toMatchSnapshot();
})