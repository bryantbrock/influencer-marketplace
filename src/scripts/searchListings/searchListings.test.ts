import { searchListings } from './searchListings';

describe('searchListings', () => {
  it('does not throw an error', () => {
    expect(searchListings('4runner')).not.toThrowError();
  });
});
