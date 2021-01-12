const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors')


require('./models/Metas');
MetasModels = mongoose.model('Meta');

const app = express(); 
const port = 8000; 

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",  "*");
    res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type", "Authorization");
    app.use(cors());
    next();
})

//Config Database
mongoose.connect('mongodb://localhost/dbserver', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected Successfull in your Database');
}).catch((err) => {
    console.log('Error Connected your Dayabase: ' + err);
});

//######## GET - Listar Metas
app.get('/listarMetas', async (req, res) => {
    await MetasModels.find({}).then((MetasModels) => {
        return res.json({
            error: false,
            MetasModels 
        });
    }).catch((error) => {
        return res.status(400).json({
            error: true, 
            message: "Error: Not register!" + error
        });
    });
}); 

//######## POST - Cadastrar Metas
app.post('/cadastrarMetas', async (req, res) => {
    
    await sleep(3000);
    console.log(sleep);
    
    function sleep(ms) {
        return new Promise((resolve) => {
            console.log('Está chegando aqui...');
            setTimeout(resolve, ms);
        });
    }

    await MetasModels.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true, 
            message: "Error: Meta not create success!" + error
        })
    });
    return res.json({
        error: false, 
        message: "Meta create success!"
    })
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});