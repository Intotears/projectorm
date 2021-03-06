module.exports = (sequelize, Sequelize) => {
    const IngreCategories = sequelize.define(
      "ingreCategories",
      {
        categoryID: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
          
        },
        categoryName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return IngreCategories;
  };
  