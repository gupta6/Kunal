const userSchema = require('./userschema');
var userOperations = {
    register(userObject,res){
        userSchema.create(userObject,(error)=>{
            if(error){
                console.log("Error in DB");
            }
            else{
                console.log("U register successfully");
//                 res.send("You have registered successfully !!");
                res.render("register");
            }
        });
    },

    login(userobject,res){
        console.log("inside login");
        const path = require("path");
        const newPath = path.normalize(__dirname+"/..");
        const fullPath = path.join(newPath,"public/index.html");
        var uname=userobject.username;
        if (uname.indexOf('@') >= 0){
            userSchema.findOne({'email':userobject.username,'password':userobject.password},(error,record)=>{
                console.log("inside userchema");
                if(error){
                    console.log("Can't Login Error in DB");
                }
                else{
                    if(record){
                        res.render('welcome');
                    }
                    else{
                        res.sendFile(fullPath);
                    }
                }
            });
        }
        else{
            userSchema.findOne({'username':userobject.username,'password':userobject.password},(error,record)=>{
                console.log("inside userchema");
                if(error){
                    console.log("Can't Login Error in DB");
                }
                else{
                    if(record){
                        res.render('welcome');
                    }
                    else{
                        res.sendFile(fullPath);
                    }
                }
            });
        }
    }
}

module.exports = userOperations;
