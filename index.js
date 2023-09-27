// Write your solution in this file!
const employee={
    'name': 'Yara',
    'streetAddress': 'Amm'
}
function updateEmployeeWithKeyAndValue(employee,name,streetAddress){
    const newEmployee= {...employee};
    newEmployee.name='Sam';
    newEmployee.streetAddress='11 Broadway'
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,name,streetAddress){
    employee.name='Sam';
    employee.streetAddress='12 Broadway'
    return employee;
}

function deleteFromEmployeeByKey(employee,name){
    const newEmployee={...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,name){
    delete employee.name;
    return employee;
}