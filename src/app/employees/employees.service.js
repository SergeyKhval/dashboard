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
    let city = '';

    employee.place.address_components.forEach(component => {
      if (component.types[0] === 'locality'){
        city = component.long_name;
      }
    });

    let employeeObj = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      position: employee.position,
      lat: employee.place.geometry.location.lat(),
      lon: employee.place.geometry.location.lng()
    };

    return _firebaseArray.get(this)(_employeesRef.get(this).child(city)).$add(employeeObj);
  }
}

EmployeesService.$inject = ['Ref', '$firebaseArray'];
