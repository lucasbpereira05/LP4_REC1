const express = require('express');
const router = express.Router();

const conexao = require('./database/db');

router.get('/', (req, res) => {
    conexao.query('SELECT * FROM users', (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('index', {results:results.rows});
        }
    })
});

router.get('/create', (req,res) => {
    res.render('create');
})

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexao.query('SELECT * FROM users WHERE id= $1', [id], (error, results) => {
        if (error) {
            throw error;
        }else{
            res.render('edit', {paciente:results.rows[0]});
        }
    })
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexao.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
});

router.get('/contato', (req, res) => {
    res.render('contato');
});

const users = require('./controllers/crud');

router.post('/save', users.save);
router.post('/update', users.update);

module.exports = router;