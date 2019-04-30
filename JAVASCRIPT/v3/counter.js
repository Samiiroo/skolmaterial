let counter = {
  value: 0 ,
  increase: function(){
  this.value ++; },
count: function(){
  console.log(counter)
  }
}
counter.count();
counter.increase();
counter.count();
