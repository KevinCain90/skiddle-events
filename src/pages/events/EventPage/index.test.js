import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from "axios";
import getEvent from '../../../services/getEvent';
import { mocks } from './mocks';
import EventPage from '.';

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
        <EventPage />
    );
};

describe("EventPage", () => {
    it("Should call the getEvent endpoint without error", async () => {
        getForm();

        await waitFor(() => {
            expect(getEvent).toHaveBeenCalled();
        });
    });
});