const express = require('express');
const App = express();
const User = require('./models/User');

App.use(express.json());

App.get("/", async (req, res) => {
    res.send("Pagina Inicial");
});

App.post("/register", async (req, res) => {
    //console.log(req.body);

    await User.create(req.body)
        .then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: "Usuario cadastrado com sucesso!"
            })/*.catch(() => {
                return res.status(400).json({
                    erro: false,
                    mensagem: "Erro: Usuário não cadastrado!"
                });
            });*/
        });
});

/*App.post('/register', function (req, res) {
    res.send('É Possivel registrar aqui');
  });*/


App.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})