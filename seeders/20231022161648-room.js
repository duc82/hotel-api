"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rooms",
      [
        {
          id: 1,
          number: 312,
          floor: 3,
          description:
            "Enjoy a relaxing stay in our spacious and elegant Deluxe King Room, featuring a comfortable king-sized bed, a cozy sitting area, and a work desk. The room also offers a minibar, a flat-screen TV, a safe, and free Wi-Fi. The private bathroom comes with a bathtub, a shower, a hairdryer, and complimentary toiletries. You can also admire the city views from the large windows or the balcony. This room is ideal for couples or business travelers who appreciate luxury and comfort",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          number: 210,
          floor: 2,
          description:
            "Enjoy a relaxing stay in our spacious and elegant Deluxe King Room, featuring a comfortable king-sized bed, a cozy sitting area, and a work desk. The room also offers a minibar, a flat-screen TV, a safe, and free Wi-Fi. The private bathroom comes with a bathtub, a shower, a hairdryer, and complimentary toiletries. You can also admire the city views from the large windows or the balcony. This room is ideal for couples or business travelers who appreciate luxury and comfort",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert("RoomTypes", [
      {
        RoomId: 1,
        name: "Luxury",
        price: 500,
        bedQuantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        RoomId: 2,
        name: "Normal",
        price: 100,
        bedQuantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rooms", null, {});
    await queryInterface.bulkDelete("RoomTypes", null);
  },
};
