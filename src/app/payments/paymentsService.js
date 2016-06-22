'use strict';

//Containers for service dependencies
const _paymentsRef = new WeakMap();
const _firebaseArray = new WeakMap();

//Service
export class PaymentsService {
  constructor(Ref, $firebaseArray) {
    _paymentsRef.set(this, Ref.child('payments').child('2016'));
    _firebaseArray.set(this, $firebaseArray);

    this.payments = _firebaseArray.get(this)(_paymentsRef.get(this));
  }
}

//Inject service dependecies
PaymentsService .$inject = ['Ref', '$firebaseArray'];
