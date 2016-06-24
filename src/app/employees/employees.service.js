'use strict';

const _firebaseArray = new WeakMap();
const _firebaseObject = new WeakMap();

export class EmployeesService {
  constructor(Ref, $firebaseArray, $firebaseObject) {
    _firebaseArray.set(this, $firebaseArray);
    _firebaseObject.set(this, $firebaseObject);

    this.employeesRef = Ref.child('employees');
    this.citiesRef = Ref.child('cities');

    this.employees = _firebaseArray.get(this)(this.employeesRef);
    this.cities = _firebaseArray.get(this)(this.citiesRef);
  }

  addEmployee(employee) {
    let city = '';

    employee.place.address_components.forEach(component => {
      if (component.types[0] === 'locality') {
        city = component.long_name;
      }
    });

    let employeeObj = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      position: employee.position,
      city: city,
      lat: employee.place.geometry.location.lat(),
      lon: employee.place.geometry.location.lng()
    };

    let cityObject = _firebaseObject.get(this)(this.citiesRef.child(city));

    return cityObject.$loaded(() => {
      if (cityObject.employeesCount) {
        cityObject.employeesCount += 1;
      } else {
        cityObject.employeesCount = 1;
      }

      let employeePromise = _firebaseArray.get(this)(this.employeesRef).$add(employeeObj),
        cityPromise = cityObject.$save();

      return Promise.all([employeePromise, cityPromise])
        .then(data => data[0]
        );
    });
  }
}

//Class dependencies
EmployeesService.$inject = ['Ref', '$firebaseArray', '$firebaseObject'];
