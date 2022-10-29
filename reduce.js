
const array =[1,8,9,4,13]

function add(array){
  array.reduce(function(acc, curr){
     return acc+curr; // 35   
  },0)
}
