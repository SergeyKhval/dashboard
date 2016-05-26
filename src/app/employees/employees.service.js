'use strict';

const _employeesRef = new WeakMap();
const _firebaseArray = new WeakMap();

export class EmployeesService {
  constructor(Ref, $firebaseArray) {
    _employeesRef.set(this, Ref.child('employees'));
    _firebaseArray.set(this, $firebaseArray);

    this.employees = _firebaseArray.get(this)(_employeesRef.get(this));
  }

  addEmployee(employee) {
    let city = employee.city.toLowerCase();

    let employeeObj = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      position: employee.position
    };

    return _firebaseArray.get(this)(_employeesRef.get(this).child(city)).$add(employeeObj);
  }
}

EmployeesService.$inject = ['Ref', '$firebaseArray'];
