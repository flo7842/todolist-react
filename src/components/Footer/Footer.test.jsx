import { render, screen } from "@testing-library/react"
import Footer from "./Footer";

test('Render Component Footer', () => {
    const renderer = render(<Footer/>);

    expect(renderer).toMatchSnapshot();
})