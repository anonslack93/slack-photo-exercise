import throttle from '../../src/lib/throttle';

describe('throttle', () => {
  it('Should throttle calls within the time window', (done) => {
   let callCount = 0;
   const throttled = throttle(() => { callCount++; }, 30);

   throttled();
   throttled();
   throttled();

   const lastCount = callCount;
   expect(callCount).to.equal(1);

   setTimeout(() => {
     expect(callCount > lastCount).to.be.true;
     done();
   }, 60);
  });

  it('Should accept a user-specified context binding', (done) => {
   let contextBinding = null;
   const throttled = throttle(function() {
     contextBinding = this;
   }, 30, 'testBinding');

   throttled();
   throttled();
   throttled();

   expect(contextBinding).to.equal('testBinding');
   contextBinding = null;

   setTimeout(() => {
     expect(contextBinding).to.equal('testBinding');
     done();
   }, 60);
  });
});
