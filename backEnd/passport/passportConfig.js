const LocalStrategy = require('passport-local').Strategy;
// const passport = require('passport');
const pg = require('../database/database.js');
const bcrypt = require('bcrypt');


function initialize(passport) {
  const authenticateUser = (mail, password, done) => {     
    const validateUser = 'SELECT * FROM users WHERE  mail = $1';
    const validateUserCase = [mail];

    pg.query(validateUser, validateUserCase, (err, result) =>{
      if (err) {
        console.error(err);
      };

      console.log(result.rows); 

      if (result.rows.length > 0) {
        const user = result.rows[0];
        // console.log(`userPsw: ${user.psw} \n, insertPsw ${password}`);
        bcrypt.compare( password, user.psw, (err, isMatch) => {
          if (err) {
            console.error(err);
          };

          if (isMatch) {
            console.log(user);
            return done(null, user);
          } else {
            done(null, false, { message: "Password or mail invalid" })
            };

        });
      } else{
        done(null, false, { message: "Password or mail invalid" })
      };
    });
  };

  passport.use(new LocalStrategy({  
      usernameField: 'mail',
      passwordField: 'password'
   }, 
    authenticateUser
   )
  );

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    const selectMail = "SELECT * FROM users WHERE id = $1";
    const selectMailCase = [id]

    pg.query(selectMail, selectMailCase, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        done(null, result.rows[0])
      }
    })
  })

};

module.exports = initialize;