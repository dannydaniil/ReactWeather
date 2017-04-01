// // do not use this any more
//
// function getTempCallback(location, callback){
//   callback(undefined,78);
//   callback('City not found');
// }
// getTempCallback('Philly', function(err, temp){
//
// if(err){
//   console.log('Error',err);
// }else{
//   console.log('Succes',temp);
// }
// });
//
// // use this to check for errors
// // it calls succes or error at most once
//
// function getTempPromise(location){
//   return new Promise(function(resolve,reject){
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Philly').then(
//   function(temp){
//   console.log('promise success',temp);
// }, function(err){
//   console.log('promise error',err);
// });


// Challenge area

function addPromise(a , b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
    resolve(a+b);
  } else {
    reject('Both \'a\' and \'b\' need to be numbers');
  }
  })
};

addPromise(6,5).then(
  function(sum){
    console.log('Success:',sum);
  },function(err){
    console.log('Error:',err)
  });
