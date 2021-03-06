module.exports = (sequelize, Sequelize) => {
    const CookingProcess = sequelize.define(
      "cookingProcess",
      {
        processID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          
        },
        processDescription: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        processImage: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return CookingProcess;
  };
  