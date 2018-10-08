## Basic API Generator

### Installation

```bash
    $   git clone https://github.com/sravannerella/basicApi.git
    $   cd basicApi
    $   npm install
    $   node index.js  // Your server will be running in port 8080
```

### Usage

- <b>/random</b> - This route will generate a random number between 1 and 10.

```
    {
        num: 9
    }
```

- <b>/users/:number</b> - This route will generate user objects based on the given number.

```
    user: {
        fname: 'Some Name',
        lname: 'Last Name',
        post: '',
        photo: 'http://placehold.it/100x100',
        username: 'SO_lastName'
    }
```

#### Thank you