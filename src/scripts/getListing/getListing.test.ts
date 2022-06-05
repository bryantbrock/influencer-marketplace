import { getListing } from './getListing';

describe('getListing', () => {
  it('does not throw an error', () => {
    expect(getListing('4runner')).not.toThrowError();
  });
});
