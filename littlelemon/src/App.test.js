import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { useNavigate } from "react-router-dom";
import * as BookingAPI from './components/BookingAPI';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

jest.mock('react-router-dom',()=> ({
  useNavigate: jest.fn(),
}));

jest.mock('./components/BookingAPI', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

beforeEach(() => {
  // Reset mocks before each test
  BookingAPI.fetchAPI.mockReset();
  BookingAPI.submitAPI.mockReset();

  // Mock implementations
  BookingAPI.fetchAPI.mockImplementation((dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
    const availableTimes = isWeekend ? ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00'] : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    return Promise.resolve(availableTimes);
  });

  BookingAPI.submitAPI.mockResolvedValue(true);
});

test('renders the BookingForm submit button', async() => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();
  useNavigate.mockReturnValue(mockNavigate);

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch}/>);

  await act(async () => {
    await userEvent.type(screen.getByLabelText(/Date \*/), '2023-05-17');
    await waitFor(() => expect(BookingAPI.fetchAPI).toHaveBeenCalledWith('2023-05-17'));
    await userEvent.selectOptions(screen.getByLabelText(/Time \*/), ['18:00']);
    await userEvent.type(screen.getByLabelText(/Number of Guests \*/), '3');
    await userEvent.click(screen.getByText("Book Now"));
  })

  expect(mockNavigate).toHaveBeenCalledWith('/confirm');
});

// const mockDispatch = jest.fn((action) => {
//   switch (action.type) {
//     case 'Weekend':
//       return ['18:00', '19:00', '20:00','21:00','22:00','23:00'];
//     case 'Weekdays':
//       return ['17:00','18:00','19:00','20:00','21:00','22:00'];
//     default:
//       return ['17:00','18:00','19:00','20:00','21:00','22:00'];
//   }
// });

// test('updateTimes and initializeTimes',() => {
//   const mockAvailableTimes = ['17:00','18:00','19:00','20:00','21:00','22:00'];
//   render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch}/>)
//   const dateInput = screen.getByLabelText(/Date \*/i);
//   userEvent.type(dateInput, '2023-05-17');
//   expect(mockDispatch).toHaveBeenCalledWith({type: 'Weekdays'});
//   mockAvailableTimes.forEach((time) => {
//     expect(screen.getByText(time)).toBeInTheDocument();
//   });
// });

// test('users can submit',() => {
//   const mockAvailableTimes = ['17:00', '18:00', '19:00'];
//   const mockDispatch = jest.fn();
//   render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch}/>);

//   userEvent.type(screen.getByLabelText(/Date \*/), "2023-05-17");
//   userEvent.selectOptions(screen.getByLabelText(/Time \*/), ["18:00"]);
//   userEvent.type(screen.getByLabelText(/Number of Guests \*/), "2");
  
//   const submitButton = screen.getByDisplayValue("Book Now");
//   userEvent.click(submitButton);

//   expect(screen.findByText("Thank you for submitting! We will see you soon!"));
//   expect(screen.findByText("2023-05-17 at 18:00"));
//   expect(screen.findByText("Party of 2"));
// });