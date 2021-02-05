import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';

test("Renders ContactForm without errors", () => {
    // Arrange
    render(<ContactForm />);
});

test("User able to input and submit form", async () => {
    // Arrange
    render(<ContactForm />);

    // Act
    // 1. Get form elements
    const firstNameInput = screen.getByLabelText(/first name*/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button");

    // 2. User types in input fields
    userEvent.type(firstNameInput, "Jen");
    userEvent.type(lastNameInput, "Kramer");
    userEvent.type(emailInput, "jen@jen.com");
    userEvent.type(messageInput, "Testing!")

    // 3. User clicks submit button
    userEvent.click(submitButton);

    // Assert
    // 1. New first name
    const newFirstName = await screen.findByText("Jen");
    expect(newFirstName).toBeInTheDocument();
    // 2. New last name
    const newLastName = await screen.findByText("Kramer");
    expect(newLastName).toBeInTheDocument();
    // 3. New email
    const newEmail = await screen.findByText("jen@jen.com");
    expect(newEmail).toBeInTheDocument();
    // 4. New Message
    const newMessage = await screen.findByText("Testing!");
    expect(newMessage).toBeInTheDocument();

})
