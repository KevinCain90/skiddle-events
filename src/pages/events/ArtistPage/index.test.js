import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from "axios";
import getArtist from '../../../services/getEvent';
import { mocks } from './mocks';
import ArtistPage from '.';

jest.mock("axios");

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({
		eventId: 123456,
	})
}));

axios.get.mockImplementation(() =>
  Promise.resolve({
    data: mocks
  })
);

const getForm = () => {
    return render(
        <ArtistPage />
    );
};

describe("ArtistPage", () => {
    it("Should call the getArtist endpoint without error", async () => {
        getForm();

        await waitFor(() => {
            expect(getArtist).toHaveBeenCalled();
        });
    });
});