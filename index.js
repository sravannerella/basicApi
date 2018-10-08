const express = require('express'),
      app = express(),
      PORT = process.env.PORT || 8080;


app.listen(PORT, (req, resp)=> {
    console.log("Server is listening in PORT: ", PORT);
});

app.get('/random', (req, resp) => {
    let json = {
        num: Math.floor(Math.random() * 9 + 1)
    }
    resp.json(json);
});

app.get('/users/:num', (req, resp) => {
    let json = {users: []};

    let fnames = ['Sravan', 'Ravan', 'Avan', 'Van', 'Sathwik', 'Sri', 'Srinivas', 'Neha', 'Harshitha', 'Akshay'];
    let lnames = ['Nerella', 'Rella', 'Ella', 'Two', 'Saketh', 'Nivas', 'Govinda', 'misty', 'Bell', 'Agord'];
    let description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda deleniti totam laborum facere praesentium cum sed illo quibusdam dolor qui facilis distinctio repellat adipisci tempore, quod a alias, cupiditate earum.';

    for(let i=0; i<req.params.num; i++) {
        let firstname = fnames[Math.floor(Math.random() * fnames.length)];
        let lastname = lnames[Math.floor(Math.random() * lnames.length)];
        let uname = firstname[0] + firstname[1] +'_'+lastname;
        let postDesc = description.substr(Math.random() * description.length, description.length);

        json.users.push({
            fname: firstname,
            lname: lastname,
            post: postDesc,
            photo: 'http://placehold.it/100x100',
            username: uname
        });
    }

    resp.json(json);
});