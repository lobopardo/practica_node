const mysql=require("mysql");

var mysqlConnection=mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password:"password",
        database:"edureka",
        multipleStatements:true
    });
    //En caso ocurra un error 1251 con la conexión
    //Usar el siguiente codigo en mysql
    /*ALTER USER 'root'@'localhost' IDENTIFIED BY 'your new password'; 
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your new password'; */
    mysqlConnection.connect((err)=>
    {
        if(!err)
        {
            console.log ("connected");
        }
        else{
            console.log(err);
            console.log("connection failed");
        }
    
    });

module.exports=mysqlConnection;