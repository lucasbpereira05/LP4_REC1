//Invocamos a conexão do DB
const conexao = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const id = Math.floor(Math.random() * 1000)
    const paciente = req.body.paciente;
    const tipo = req.body.tipo;
    const data = req.body.data;
    conexao.query(
        'INSERT INTO users(id, paciente, tipo, data) VALUES($1, $2, $3, $4)',
        [id, paciente, tipo, data],
        (error, results) => {
        if(error){
            console.log(error);
        }else{  
            res.redirect('/');         
        }
});
};

exports.update = (req, res)=>{
    const id = req.body.id;
    const paciente = req.body.paciente;
    const tipo = req.body.tipo;
    const data = req.body.data;
    conexao.query(
        'UPDATE users SET id=$1, Paciente=$2, tipo=$3, data=$4 WHERE data=$4',
        [id, paciente, tipo, data],
        (error, results) => {
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};