function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a == 'number' && typeof b == 'number') {
      resolve(a+b);
    } else {
      reject('invalid number entered');
    }
  });
}

addPromise(2,4).then(function(sum) {
  console.log('success:', sum);
}, function (err) {
  console.log('error message:', err);
})

addPromise(1,'x').then(function(sum) {
  console.log('success:', sum);
}, function (err) {
  console.log('error message:', err);
})
