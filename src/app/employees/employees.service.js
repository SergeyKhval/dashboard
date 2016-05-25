export class EmployeesService {
  constructor(Ref, $firebaseArray) {
    this.$firebaseArray = $firebaseArray;
    this.employeesRef = Ref.child('employees');
  }

  addEmployee(employee){
    return this.$firebaseArray(this.employeesRef).$add(employee);
  }
}
