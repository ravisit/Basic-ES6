
const array =['John',45,false,'Hi, there!'];


function iterate(array){
   array.forEach(function(array_element){
       console.log(array_element); // 'John',45,false,'Hi, there!'
  })
}


const obj = {
    fname:'Ram',
    lname:'Singh',
    address:'Delhi India'
}

function iterateObj(object){
  Object.keys(object).forEach(function(obj_element){
     console.log(obj_element);
 })
}
