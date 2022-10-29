//rest

function processData(fname,lname,...otherInfo){
   return otherInfo;  
}

processData('Ram','Singh','Delhi','India'); // ['Delhi','India']


//spread

function addition(v1,v2,v3,v4){
 
  return v1+v2+v3+v4;
}

const values = [1,2,5,8,4,3];

addition(...values); // 26




const array1 =['Asley','Yha'];
const array2 =['Ram','Shayam'];

const array3 = [...array1,...array2];