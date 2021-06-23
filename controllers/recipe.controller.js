
// Post a recipe
exports.createRecipe = (req, res) => {
  Recipe.create({
    recipeName : req.body.recipeName,
    description: req.body.description,
    time: req.body.time,
    shareOption: req.body.shareOption,
    serveNumber: req.body.serveNumber,
  }).then((recipe) => {
    res.status(200).json({
      status: true,
      message: "Recipe created successfully",
    });
  });
};