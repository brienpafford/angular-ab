var FIREBASE_URL = 'https://angular-ab.firebaseio.com/contacts.json'

angular
	.module('actionAddressBook', [])

	.filter('objToArr', function () {
		return function (obj) {
				if (obj) {
					return Object
						.keys(obj)
						.map(function (key) {
							obj[key]._id = key;
							return obj[key];
						});
			}
		}
	})

	.filter('ransomcase', function () {
		return function (string) {
			return string
				.split('')
				.map(function(char, i) {
					return i % 2 ? char.toUpperCase() : char.toLowerCase();
			})
				.join('');
		}
	})

	.controller('Main', function($http) {
		var vm = this;

		$http.get(FIREBASE_URL)
		.success(function (data) {
			vm.contacts = data;
		});

		vm.newContact = {};

		vm.addNewContact = function () {
			$http
				.post('https://angular-ab.firebaseio.com/contacts.json', vm.newContact)
				.success(function () {
					vm.contacts.push(vm.newContact);
					vm.newContact = {};
					$('#modal').modal('hide');
			});
}

		vm.removeContact = function (id) {
			//debugger;
			$http
				.delete(`https://angular-ab.firebaseio.com/contacts/${id}.json`)
				.success(function () {
					delete vm.contacts[id]
					console.log(id);
				})
			};

});


