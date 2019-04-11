class User {
  constructor(details) {
    const { firstname, lastname } = details;
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get name() {
    return `${this.firstname} ${this.lastname}`;
  }
}

const nameTest = function () {
  const userDetails = {
    firstname: 'John',
    lastname: 'Doe',
  };

  const testUser = new User(userDetails);
  console.log('User name is correct: ', testUser.name === 'John Doe');
};

nameTest();
