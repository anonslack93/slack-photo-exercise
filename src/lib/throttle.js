export default (fn, timeWindow = 300, context) => {
  let lastCallTime;
  let pendingCall;

  return function(...args) {
    const now = +new Date();
    const fnContext = context || this;
    const nextCallTime = lastCallTime + timeWindow;

    if (lastCallTime && now < nextCallTime) {
      clearTimeout(pendingCall);
      pendingCall = setTimeout(() => {
        lastCallTime = now;
        fn.apply(fnContext, args);
      }, timeWindow);
    } else {
      lastCallTime = now;
      fn.apply(fnContext, args);
    }
  };
}
