import {Stck} from './stck';

describe('Stck', () => {

  it('has sid', () => {
    let stck: Stck = {sid:0,date:new Date(),age:0,weight:0,height:0};
    expect(stck.sid).toEqual(0);
  });

});
