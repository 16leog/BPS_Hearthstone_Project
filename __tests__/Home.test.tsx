import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    // Other router properties and methods you use in your component
  })),
}));
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        message: 'Table created successfully',
      }),
  })
) as jest.Mock;

describe('Homepage tests', () => {
  it('should render the Mage button', async () => {
    // Set up a mock response for the fetch call

    render(<Home />);
    const myElement = screen.getByText('Mage');

    expect(myElement).toBeInTheDocument();
  });

  it('should render the Druid button', async () => {
    // Set up a mock response for the fetch call

    render(<Home />);
    const myElement = screen.getByText('Druid');

    expect(myElement).toBeInTheDocument();
  });

  it('should render the Hunter button', async () => {
    // Set up a mock response for the fetch call

    render(<Home />);
    const myElement = screen.getByText('Hunter');

    expect(myElement).toBeInTheDocument();
  });

  it('should render the Priest button', async () => {
    // Set up a mock response for the fetch call

    render(<Home />);
    const myElement = screen.getByText('Priest');

    expect(myElement).toBeInTheDocument();
  });

  it('should render the Rogue button', async () => {
    // Set up a mock response for the fetch call

    render(<Home />);
    const myElement = screen.getByText('Rogue');

    expect(myElement).toBeInTheDocument();
  });

  it('should render the Paladin button', async () => {
    // Set up a mock response for the fetch call

    render(<Home />);
    const myElement = screen.getByText('Paladin');

    expect(myElement).toBeInTheDocument();
  });

  it('should render the Demon Hunter button', async () => {
    // Set up a mock response for the fetch call

    render(<Home />);
    const myElement = screen.getByText('Demon Hunter');

    expect(myElement).toBeInTheDocument();
  });

  it('should render the Warlock button', async () => {
    // Set up a mock response for the fetch call

    render(<Home />);
    const myElement = screen.getByText('Warlock');

    expect(myElement).toBeInTheDocument();
  });

  it('should render the Warrior button', async () => {
    // Set up a mock response for the fetch call

    render(<Home />);
    const myElement = screen.getByText('Warrior');

    expect(myElement).toBeInTheDocument();
  });

  it('should make api call in the homepage to create a table', async () => {
    // Set up a mock response for the fetch call

    render(<Home />);
    // Optionally, you can check if fetch was called with the expected URL and options
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:3000/api/createTable',
      {
        next: { revalidate: 1 },
      }
    );
  });
});
