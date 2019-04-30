let giveMePromise = new Promise(function(resolve, reject){
  let msg = true;
// writing msg

  if (msg){
    resolve('Hello from promise"');
  }else {
    reject('notmsgme');
  }

});
giveMePromise.then(function(fromResolve){
  console.log('Hello' + 'resolve')
});
