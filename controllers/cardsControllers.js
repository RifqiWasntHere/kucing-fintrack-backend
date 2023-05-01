const { cards } = require("../models");
// KURANG GET CARD
class cardsControllers {
  static async addCard(req, res, next) {
    try {
      const { userId, cardName, cardType } = req.body;
      await cards.create({
        userId,
        cardName,
        cardType,
      });
      res.status(201).json({ message: "Card added successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async updateCard(req, res, next) {
    try {
      const { id, cardName } = req.body;
      await cards.update(
        {
          cardName,
        },
        {
          where: { id },
        }
      );
      res.status(201).json({ message: "Card updated successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async deleteCard(req, res) {
    try {
      const { id } = req.body;
      await cards.update(
        {
          isActive: 0, //TAMBAH isActive DI DB
        },
        {
          where: { id },
        }
      );
      res.status(201).json({ message: "Card deleted successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }
}

module.exports = cardsControllers;
