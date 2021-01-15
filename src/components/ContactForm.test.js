import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

test("Renders ContactForm without errors", () => {
    // Arrange
    render(<ContactForm />);
});

