
import { getPlaceDetail } from '@/app/api/getPlaces';

describe('getPlaceDetail', () => {
  // Tests that getPlaceDetail returns an empty array when no places are found
  it('should return an empty array when no places are found', async () => {
    // Mock the fetch function
    const mockFetch = jest.fn();
    global.fetch = mockFetch;

    // Mock the response data
    const mockResponse = {
      json: jest.fn().mockResolvedValue({
        results: [],
      }),
    };
    mockFetch.mockResolvedValue(mockResponse);

    // Call the function
    const result = await getPlaceDetail({ lat: '123', lng: '456' });

    // Verify the result
    expect(result).toEqual([]);

    // Verify the fetch call
    expect(mockFetch).toHaveBeenCalledWith(
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=123,456&radius=1000000&type=store&key=' +
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    );
  });

  // Tests that getPlaceDetail throws an error when the fetch request to get IDS fails
  it('should throw an error when the fetch request to get IDS fails', async () => {
    // Mock the fetch function to throw an error
    const mockFetch = jest
      .fn()
      .mockRejectedValue(new Error('Failed to fetch IDS'));
    global.fetch = mockFetch;

    // Call the function
    await expect(
      getPlaceDetail({ lat: '123', lng: '456' })
    ).rejects.toThrowError('Failed to fetch IDS');
  });

  // Tests that getPlaceDetail throws an error when the fetch request to get place details fails
  it('should throw an error when the fetch request to get place details fails', async () => {
    // Mock the fetch function
    const mockFetch = jest.fn();
    global.fetch = mockFetch;

    // Mock the response data to throw an error
    const mockResponse = {
      json: jest
        .fn()
        .mockRejectedValue(new Error('Failed to fetch place details')),
    };
    mockFetch.mockResolvedValue(mockResponse);

    // Call the function
    await expect(
      getPlaceDetail({ lat: '123', lng: '456' })
    ).rejects.toThrowError('Failed to fetch place details');

    // Verify the fetch call
    expect(mockFetch).toHaveBeenCalledWith(
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=123,456&radius=1000000&type=store&key=' +
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    );
  });
});
