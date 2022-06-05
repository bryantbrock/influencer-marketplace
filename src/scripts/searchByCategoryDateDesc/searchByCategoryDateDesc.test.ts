import { searchByCategoryDateDesc } from './searchByCategoryDateDesc';

describe('searchByCategoryDateDesc', () => {
  it('does not throw an error', () => {
    expect(searchByCategoryDateDesc('vehicles')).not.toThrowError();
  });
});
