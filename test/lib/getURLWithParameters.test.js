import getURLWithParameters from '../../src/lib/getURLWithParameters';

describe('getURLWithParameters', () => {
  it('Should return the base URL if no parameters are given', () => {
    expect(getURLWithParameters('slack.com')).to.equal('slack.com');
    expect(getURLWithParameters('slack.com', {})).to.equal('slack.com');
  });

  it('Should add query string parameters to the base URL', () => {
    expect(getURLWithParameters('slack.com', {
      param1: 'value1',
      param2: 'value2'
    })).to.equal('slack.com?param1=value1&param2=value2');
  });

  it('Should URI encode both keys and values', () => {
    expect(getURLWithParameters('slack.com', {
      '<param1>': '@value1',
      '<param2>': '@value2'
    })).to.equal('slack.com?%3Cparam1%3E=%40value1&%3Cparam2%3E=%40value2');
  });

  it('Should ignore null and undefined values', () => {
    expect(getURLWithParameters('slack.com', {
      param1: undefined,
      param2: null,
      param3: 'value3'
    })).to.equal('slack.com?param3=value3');
  });
});
