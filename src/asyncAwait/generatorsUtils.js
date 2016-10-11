const isPromise = (obj) => typeof obj !== 'undefined' &&
  typeof obj.then === 'function';

const next = (iter, callback, prev = undefined) => {
  const item = iter.next(prev);
  const value = item.value;

  if (item.done) return callback(prev);

  if (isPromise(value)) {
    value.then(val => {
      setImmediate(() => next(iter, callback, val));
    });
  } else {
    setImmediate(() => next(iter, callback, value));
  }
};

const gensync = (fn) =>
    (...args) => new Promise(resolve => {
  next(fn(...args), val => resolve(val));
});

module.exports = gensync
