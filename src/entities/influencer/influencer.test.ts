import Influencer from './influencer';

describe('An `influencer` entity', () => {
  it('contains a unique id', () => {
    const influencer = new Influencer('test-id');
    const influencer2 = new Influencer('test-id-2');

    expect(influencer.id).not.toEqual(influencer2.id);
  });
});
