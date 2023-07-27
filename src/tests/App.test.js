import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';
import { BrowserRouter } from "react-router-dom";

test('renders the landing page', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    
    const title = screen.getByText("FarLands");
    expect(title).toBeInTheDocument();
});