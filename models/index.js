const User = require('./user');
const Recipe = require('./recipe.js')

User.hasMany(Recipe);
Recipe.belongsTo(User);

module.exports = { User, Recipe }