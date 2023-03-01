var Guid = require('guid');
var db = require('../../config/db.js');

var Token = function(token){

    if(token != undefined){
        this.id = token.id;
        this.token = token.token;        
    }
    else{
        this.id = 0;
        this.token = "";        
    }

    this.criar = function(callback){        
        var token = Guid.raw();
<<<<<<< HEAD
<<<<<<< HEAD
        var query = "INSERT INTO `pi_backend`.Token (token) VALUES ('" + token + "');";
=======
        var query = "INSERT INTO `CMS-API`.token (token) VALUES ('" + token + "');";
>>>>>>> parent of 142f138 (consertando erros da aplicação)
=======
        var query = "INSERT INTO `pi_backend`.token (token) VALUES ('" + token + "');";
>>>>>>> parent of ffff00e (arrumando nomes das tabelas)
        db.cnn.exec(query, function(rows, err ){
            if(err !== undefined && err !== null){
                callback.call(null, {erro: true, mensagem: err.message});
            }
            else{
                callback.call(null, {erro: false, token: token});
            }
        }); 
    };
};

Token.verificaToken = function(token, callback){
<<<<<<< HEAD
<<<<<<< HEAD
    var query = "select * from `pi_backend`.Token where  token = '" + token + "';";
=======
    var query = "select * from `CMS-API`.token where  token = '" + token + "';";
>>>>>>> parent of 142f138 (consertando erros da aplicação)
=======
    var query = "select * from `pi_backend`.token where  token = '" + token + "';";
>>>>>>> parent of ffff00e (arrumando nomes das tabelas)
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                tokenValidado: false
            });
        }
        else{
            callback.call(null, {
                tokenValidado: (rows.length > 0)
            });
        }
    }); 
};

Token.apagarToken = function(token, callback){
<<<<<<< HEAD
<<<<<<< HEAD
    var query = "delete from `pi_backend`.Token where  token = '" + token + "';";
=======
    var query = "delete from `CMS-API`.token where  token = '" + token + "';";
>>>>>>> parent of 142f138 (consertando erros da aplicação)
=======
    var query = "delete from `pi_backend`.token where  token = '" + token + "';";
>>>>>>> parent of ffff00e (arrumando nomes das tabelas)
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            if(callback !== undefined){
                callback.call(null, { erro: true, mensagem: err.mensagem });
            }
        }
        else{
            if(callback !== undefined){
                callback.call(null, { erro: false });
            }
        }
    }); 
};


module.exports = Token;