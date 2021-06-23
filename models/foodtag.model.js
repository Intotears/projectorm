module.exports = (sequelize, Sequelize) => {
    const FoodTag = sequelize.define(
      "foodtag",
      {
          tagID: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
          
        },
        tagName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return FoodTag;
  };
  