export const Query = (selector) => document.querySelector(selector);

export const attachEvent = (to, event, cb) => {
  to.addEventListener(event, cb);
};
