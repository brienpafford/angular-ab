angular
	.module('actionAddressBook', [])

	.controller('Main', function() {
		var vm = this;

		vm.contacts = [
					{name: 'Adam',
					 twitter: '@adam',
					 phone: '1 615 345 2345',
					 email: 'adam@gmail.com'
					 },
					{name: 'Brittany',
					 twitter: '@autoTune',
					 phone: '1 615 278 3983',
					 email:  'brittany@bing.com'
					 },
					{name: 'Caleb',
					 twitter: '@cmoney',
					 phone: '1 615 324 5443',
						email:'cmoney@css.com'
					 },
					{name: 'Danny',
					 twitter: '@doubletrouble',
					 phone: '1 234 678 8765',
						email: 'danny@data.com'
					 },
					{name: 'Elsa',
					twitter: '@letitgo',
					phone: '1 615 234 4443',
					email: 'elsa@frozen.com'
					},
					{name: 'Fred',
					 twitter: '@freakyfreddy',
					 phone: '1 222 345 2321',
					 email: 'fred@fresh.com'
					},
					{name: 'Greg',
					 twitter: '@gregorious',
					 phone: '1 615 333 1112',
					 email: 'greg@google.com'
					 },
					];

		vm.newContact = {};

		vm.addNewContact = function () {
			vm.contacts.push(vm.newContact);
			vm.newContact = {};
		};

		vm.removeContact = function (contact) {
			var index = vm.contacts.indexOf(contact);
			vm.contacts.splice(index, 1);
		};
});


