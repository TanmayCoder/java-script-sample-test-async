//Call Backs
export const callbackFunction = (params, callback) => {
  callback();
};
callbackFunction('params', () => {
  console.log('some');
});
