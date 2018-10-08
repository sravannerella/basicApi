## Basic API Generator

### Installation

```js
    $   npm i
    $   node index.js  // Your server will be running in port 8080
```

### Usage

- <b>/random</b> - This route will generate a random number between 0 and 9.

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