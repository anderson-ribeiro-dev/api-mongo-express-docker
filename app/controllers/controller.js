const Cliente = require('../models/model.js');
exports.create = (req, res) => {
    const cliente = new Cliente({
        name: req.body.name, 
        email: req.body.email,
        title: req.body.title,
        value: req.body.value,
        since: req.body.since,
    });

    cliente.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erro ao criar cliente."
        });
    });
};

exports.findAll = (req, res) => {
    Cliente.find({title : 'em atraso'})
    .then(clientes => {
        res.send(clientes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erro ao buscar cliente."
        });
    });
};


exports.findOne = (req, res) => {
    Cliente.findById(req.params.id)
    .then(cliente => {
        if(!cliente) {
            return res.status(404).send({
                message: "Não foi encontrado o id" + req.params.id
            });            
        }
        res.send(cliente);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Não foi encontrado o id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Não foi encontrado o id " + req.params.id
        });
    });
};


exports.update = (req, res) => {
    Cliente.findOneAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        title: req.body.title,
        value: req.body.value,
        since: req.body.since,
    }, {new: true})
    .then(cliente => {
        if(!cliente) {
            return res.status(404).send({
                message: "Não foi encontrado o id " + req.params.id
            });
        }
        res.send(cliente);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Não foi encontrado o id" + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Não foi encontrado o id " + req.params.id
        });
    });
};


exports.delete = (req, res) => {
    Cliente.findOneAndDelete(req.params.id)
    .then(cliente => {
        if(!cliente) {
            return res.status(404).send({
                message: "Não foi encontrado o id " + req.params.id
            });
        }
        res.send({message: "Cliente excluido com sucesso!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Não foi encontrado o id " + req.params.cliente
            });                
        }
        return res.status(500).send({
            message: "Could not delete cliente with id " + req.params.id
        });
    });
};
