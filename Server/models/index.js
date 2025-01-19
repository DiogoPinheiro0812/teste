const sequelize = require('../../connection');

const Utilizador = require('./utilizador.model');
const Ingrediente = require('./ingrediente.model');
const PassoReceita = require('./passoReceita.model');
const Receita = require('./receita.model');
const ReceitaUtilizador = require('./receitaUtilizador.model');
const ReceitaIngrediente = require('./receitaIngrediente.model');
const Review = require('./review.model');
const ReviewPergunta = require('./reviewPergunta.model');
const ReviewPergOpcao = require('./reviewPergOpcao.model');
const ReviewPergRespUtilizador = require('./reviewPergRespUtilizador.model');

Utilizador.belongsToMany(Receita, { through: ReceitaUtilizador });
Receita.belongsToMany(Utilizador, { through: ReceitaUtilizador });

PassoReceita.hasOne(Receita, {foreignKey: 'receitaId'});
Receita.hasMany(PassoReceita, {foreignKey: 'receitaId'});

Receita.belongsToMany(Ingrediente, {
    through: ReceitaIngrediente,
    foreignKey: 'receitaId',
    otherKey: 'ingredienteId',
  });
Ingrediente.belongsToMany(Receita, {
    through: ReceitaIngrediente,
    foreignKey: 'ingredienteId',
    otherKey: 'receitaId',
  });

Review.hasMany(ReviewPergunta, {foreignKey: 'reviewId'});
ReviewPergunta.belongsTo(Review, {foreignKey: 'reviewId'});

Utilizador.belongsToMany(ReviewPergOpcao, { through: ReviewPergRespUtilizador });
ReviewPergOpcao.belongsToMany(Utilizador, { through: ReviewPergRespUtilizador });

ReviewPergOpcao.belongsTo(ReviewPergunta, {foreignKey: 'perguntaId'});
ReviewPergunta.hasMany(ReviewPergOpcao, {foreignKey: 'perguntaId'});


sequelize.sync({'logging': false, 'force': false});

module.exports = { Utilizador, Ingrediente, Review, PassoReceita, Receita, ReceitaIngrediente, ReviewPergunta, ReviewPergOpcao, ReviewPergRespUtilizador };