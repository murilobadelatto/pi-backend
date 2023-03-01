var db = require('../../config/db.js');

var Tutor = function(tutor){

    if(tutor != undefined){
        this.id = tutor.id;
        this.nome = tutor.nome;
        this.login = tutor.login;
        this.senha = tutor.senha;
        this.email = tutor.email;
    }
    else{
        this.id = 0;
        this.nome = "";
        this.login = "";
        this.senha = "";
        this.email = "";
    }
    

    this.salvar = function(callback){
        if(this.nome == ""){
            console.log("[Modelo:Tutor] Nome de tutor obrigatorio");
            return;
        }

        if(this.login == ""){
            console.log("[Modelo:Tutor] Nome de login obrigatorio");
            return;
        }

        if(this.senha == ""){
            console.log("[Modelo:Tutor] Nome de senha obrigatorio");
            return;
        }

        var query = "";
        if(this.id == 0 || this.id == "" || this.id == undefined){
            
<<<<<<< HEAD
<<<<<<< HEAD
            query = "INSERT INTO `pi_backend`.Tutores (nome, login, senha, email) VALUES ('" + this.nome + "', '" + this.login + "', '" + this.senha + "', '" + this.email + "');";
=======
            query = "INSERT INTO `CMS-API`.tutores (nome, login, senha, email) VALUES ('" + this.nome + "', '" + this.login + "', '" + this.senha + "', '" + this.email + "');";
>>>>>>> parent of 142f138 (consertando erros da aplicação)
=======
            query = "INSERT INTO `pi_backend`.tutores (nome, login, senha, email) VALUES ('" + this.nome + "', '" + this.login + "', '" + this.senha + "', '" + this.email + "');";
>>>>>>> parent of ffff00e (arrumando nomes das tabelas)

            db.cnn.exec(query, function(rows, err ){
                if(err !== undefined && err !== null){
                    callback.call(null, {erro: true, mensagem: err.message});
                }
                else{
                    callback.call(null, {erro: false});
                }
            });
        }
        else {
<<<<<<< HEAD
<<<<<<< HEAD
            query = "UPDATE `pi_backend`.Tutores SET nome = '" + this.nome + "', login = '" + this.login + "', senha = '" + this.senha + "', email = '" + this.email + "' WHERE (id = '" + this.id + "');";
=======
            query = "UPDATE `cms-api`.tutores SET nome = '" + this.nome + "', login = '" + this.login + "', senha = '" + this.senha + "', email = '" + this.email + "' WHERE (id = '" + this.id + "');";
>>>>>>> parent of 142f138 (consertando erros da aplicação)
=======
            query = "UPDATE `pi_backend`.tutores SET nome = '" + this.nome + "', login = '" + this.login + "', senha = '" + this.senha + "', email = '" + this.email + "' WHERE (id = '" + this.id + "');";
>>>>>>> parent of ffff00e (arrumando nomes das tabelas)
            db.cnn.exec(query, function(rows, err ){
                if(err !== undefined && err !== null){
                    callback.call(null, {erro: true, mensagem: err.message});
                }
                else{
                    callback.call(null, {erro: false});
                }
            });
        }
    };
};

Tutor.excluirTodos = function(callback){
    query = "delete from tutores";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {erro: true, mensagem: err.message});
        }
        else{
            callback.call(null, {erro: false});
        }
    });

};

Tutor.truncateTable = function(callback){
<<<<<<< HEAD
<<<<<<< HEAD
    query = "truncate `pi_backend`.Tutores";
=======
    query = "truncate `cms-api`.tutores";
>>>>>>> parent of 142f138 (consertando erros da aplicação)
=======
    query = "truncate `pi_backend`.tutores";
>>>>>>> parent of ffff00e (arrumando nomes das tabelas)
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {erro: true, mensagem: err.message});
        }
        else{
            callback.call(null, {erro: false});
        }
    });

};

Tutor.todos = function(callback){
    query = "select * from tutores";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                erro: true, 
                mensagem: err.message, 
                tutores: []
            });
        }
        else{
            callback.call(null, {
                erro: false, 
                tutores: rows
            });
        }
    });
};

Tutor.buscaPorId = function(id, callback){
    query = "select * from tutores where id = " + id + ";";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                erro: true, 
                mensagem: err.message, 
                tutor: {}
            });
        }
        else{
            if(rows.length > 0){
                callback.call(null, {
                erro: false, 
                tutor: rows[0]
                });
            }
            else{
                callback.call(null, {
                    erro: false, 
                    tutor: {}
                });
            }                    
        }
    });
};

Tutor.excluirPorId = function(id, callback){
    query = "delete from tutores where id = " + id + ";";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                erro: true, 
                mensagem: err.message
            });
        }
        else{
            callback.call(null, {
                erro: false
            });
        }
            
    });
};

Tutor.buscaPorNome = function(nome, callback){
<<<<<<< HEAD
<<<<<<< HEAD
    query = "SELECT * FROM `pi_backend`.Tutores where nome like '%" + nome + "%';";
=======
    query = "SELECT * FROM `cms-api`.tutores where nome like '%" + nome + "%';";
>>>>>>> parent of 142f138 (consertando erros da aplicação)
=======
    query = "SELECT * FROM `pi_backend`.tutores where nome like '%" + nome + "%';";
>>>>>>> parent of ffff00e (arrumando nomes das tabelas)
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                erro: true, 
                mensagem: err.message, 
                tutores: []
            });
        }
        else{
            if(rows.length > 0){
                callback.call(null, {
                erro: false, 
                tutores: rows
                });
            }
            else{
                callback.call(null, {
                    erro: false, 
                    tutores: []
                });
            }                    
        }
    });
};


module.exports = Tutor;