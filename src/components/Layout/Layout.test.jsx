import { render, screen } from "@testing-library/react"
import Layout from "./Layout";


test('Render Layout', () => {
    const renderer = render(<Layout />);

    expect(renderer).toMatchSnapshot();

})

test("header child component", () => {
    const { getByText } = render(<Layout />);
    expect(getByText(/TODOLIST/i)).toBeInTheDocument();
});

test("footer child component", () => {
    const { getByText } = render(<Layout />);
    expect(getByText(/@Agence.Freya/i)).toBeInTheDocument();
});
