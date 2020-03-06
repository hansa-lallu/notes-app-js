const describe = (desc, fn) => {
  console.log(desc);
  fn();
};

const it = (msg, fn) => describe(' ' + msg, fn);

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('%c pass', 'color: green')
      return true
    } else {
      console.log('%c fail', 'color: red')
      return false
    };
  },

  NotToBe: (assertion) => {
    if (exp !== assertion) {
      console.log('%c pass', 'color: green')
      return true
    } else {
      console.log('%c fail', 'color: red')
      return false
    };
  },

  toBeInstanceOf: (assertion) => {
    if (exp instanceof assertion) {
      console.log('%c pass', 'color: green')
      return true
    } else {
      console.log('%c fail', 'color: red')
      return false
    };
  }
});

const expect = (exp) => matchers(exp); 