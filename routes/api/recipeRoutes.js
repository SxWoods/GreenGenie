const router = require('express').Router();
const { Recipe, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) =>{
  try {
    const Recipes = await Recipe.findAll({
      include: [User]
    });

    res.status(200).json(Recipes);
  } catch (err) {
    res.status(400).json(err);
  }
}),

router.post('/', async (req, res) => {
  console.log('we hit the route :)')
  try {
    const newRecipe = await Recipe.create({
      name: req.body.strainName,
      description: req.body.description,
      type: req.body.weedType,
      grow_time: req.body.growTime,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    console.log('error: ', err);
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;