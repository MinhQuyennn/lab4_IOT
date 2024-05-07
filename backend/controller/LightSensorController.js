import LightSensor from "../models/sensor_light.js";
//import Board from "../models/board.js";

// POST
export const AddLightSensorValue = async (req, res, next) => {
  try {
    const { /*board_name,*/ light } = req.body;

    // Check if the board exists
    /**const existingBoard = await Board.findOne({ board_name });
    if (!existingBoard) {
      return res.status(404).json("Board not found!");
    } */

    // Create a new light sensor instance with the board_id
    const lightsensor = new LightSensor({
      //board_id: existingBoard._id, // Assign the board's ObjectId to the sensor
      light,
    });

    // Save the lightsensor
    await lightsensor.save();

    return res.status(200).json({ success: true, sensor: lightsensor });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
};
