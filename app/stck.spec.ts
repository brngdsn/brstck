import {Stck} from './stck';

describe('Stck', () => {

  it('has sid', () => {
    let stck: Stck = {sid:0};
    expect(stck.sid).toEqual(0);
  });

});
