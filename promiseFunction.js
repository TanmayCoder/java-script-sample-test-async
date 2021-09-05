const myPromise = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve('Yes the promise is resolvesd!!!');
  } else {
    reject('OOOOPS..... Promise is rejected');
  }
});
console.log(myPromise);
myPromise
  .then(result => {
    console.log(result);
    return result + 1;
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
