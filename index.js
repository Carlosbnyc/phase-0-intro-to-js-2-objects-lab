// Write your solution in this file!

const employee = {
 name: "Tedd",
streetAddress: "311 11th Ave",
}

function updateEmployeeWithKeyAndValue(employee,key,value){
 const newObject = {...employee}

 newObject[key] = value;

return newObject;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){
 
  employee[key] = value;
  
;
  return employee;      
}

function deleteFromEmployeeByKey(employee,key,value){

  const newObject = {...employee.key};

  newObject [key]= value;

  return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee,key, value) {

  employee[key] = value;

  return employee; 
}
