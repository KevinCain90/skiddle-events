import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPage from '.';

const getForm = () => {
    return render(
        <SearchPage />
    );
};

describe("SearchPage", () => {
    it("Should display the input correctly without error", () => {
        getForm();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});