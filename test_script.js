const pg = require("pg");
const settings = require("./settings"); // settings.json


const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const listAllFamousPeople = cb => {
    const selectQueryText = `SELECT * FROM famous_people`;

    client.query(selectQueryText, (err, res) => {
        if (err) {
            console.log(`Error in query command input ${err.stack}`)
        } else {
            cb(res.rows);
            client.end();
        }
    });
};

const findFamousPeopleByUserInput = (userInput, cb) => {
    const selectQueryText = `SELECT * FROM famous_people WHERE first_name = $1 or last_name = $1`
    
    client.query(selectQueryText, [userInput], (err, res) => {
        if (err) {
            console.log('wrong user input')
        } else {
            cb(res.rows)
            client.end();

        }
    })

}



client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  } else {
    const [node, path, userInput] = process.argv;
        if (!userInput) {
            listAllFamousPeople(function(result) {
                console.log(result)
            });         
        } else {
                
                findFamousPeopleByUserInput(userInput, function(result) {
                    console.log(result)
                })

                
        }
            
    }  
});
  