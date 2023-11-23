const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const User = require('./models/produtos')
const app = express()
const Sequelize = require('sequelize');
app.get('/produtos/create',function(req, res) {
res,render('adduser')
})
app.post('/produtos/create',function(req, res){
    const  ti = req.body.ti
    const  de = req.body.de
    const   pre = req.body.pre
    let    qua = req.body.qua
    const  poleg = req.body.poleg
    const  tipotecn = req.body.tipotecn
    const  infor = req.body.infor

    if (qua === 'on'){
        qua = true
    }
    produtos.create({ti,de,pre,qua,poleg,tipotecn,infor})
    res.redirect('/')
})



app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.get('/', function (req, res) {
    produtos.findAll({raw: true})
    .then((produtos)=>{
    console.log(user)
    res.render('home',{produtos:produtos})
})
.catch((err)=>console.log(err))
})

    app.get('/', function (req, res) {
        produtos.findAll({raw: true})
        .then((produtos)=>{
        console.log(user)
        res.render('cadastroprodutos',{produtos:produtos})
    })
})
app.get('/', function (req, res) {
    produtos.findAll({raw: true})
    .then((produtos)=>{
    console.log(user)
    res.render('cadastrocliente',{produtos:produtos})
})
})

app.get('/produtos/:id', function (req, res) {
    const id = req.params.id
  
    User.findOne({
      include: Address,
      where: {
        id: id,
      },
    })
      .then((produtos) => {
        console.log(produtos)
        res.render('cadastroprodutos', { produtos})
      })
      .catch((err) => console.log(err))
  })
  app.get('/produtos/delet/:id', function (req, res) {
    const id = req.params.id
  
    User.destroy({
      include: Address,
      where: {
        id: id,
      },
    })
      .then((produtos) => {
        res.render('/')
      })
      .catch((err) => console.log(err))
  })


app.post('/updateprodutos', function (req, res) {
    
    const id = req.produtos .id
    
    const tipo = req.produtos .tipo
    
    const desc = req.produtos .desc
    
    const query = `UPDATE produtos SET tipo = '${tipo}', desc = ${desc} WHERE id = ${id}`
    
    pool.query(query, function (err) {
    
    if (err) {
    
    console.log(err)
    
    }
    
    res.redirect(`/produtos/editprodutos/${id}`)
    })
})
    
    app.post('/produtos/remove/:id', function (req, res) {
    const id = req.params.id
    
    const query = `DELETE FROM produtos WHERE id = ${id}`
    
    pool.query(query, function (err) {
    
    if (err) {
    
    console.log(err)
    
    }
    
    res.redirect(`/produtos`)
    
    })
    
    })

    app.post('/insertprodutos',function(req,res){

        const ti = req.body.ti
        const de = req.body.de
        const pre = req.body.pre
        const qua = req.body.qua
        const poleg = req.body.poleg
        const tipotecn= req.body.tipotecn
        const infor = req.body.infor



        const query = `INSERT INTO produtos (??,??,??,??,??,??) VALUES (?,?,?,?,?,?)`
        const data = ['quantproddisponiveis','descproduto','tipodoproduto','polegadas','tipodetecnologia','inforextra',qua,de,ti,poleg,tipotecn,infor]

        pool.query(query,data,function(err){
            if(err){
                console.log(err)
            }
            console.log(data)
            res.redirect('/')
        })
    })
    app.post('/insertcliente',function(req,res){

        const n = req.body.n
        const r = req.body.r
        const e = req.body.e
        const c = req.body.c
        const d = req.body.d
 



        const query = `INSERT INTO cliente (??,??,??,??,??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`
        const data = ['n','r','e','p','c','d',n,r,e,c,d]

        pool.query(query,data,function(err){
            if(err){
                console.log(err)
            }
            console.log(data)
            res.redirect('/')
        })
    })
    conn
  /*.sync({force: true})*/
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))
