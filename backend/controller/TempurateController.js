import TemperatureSensor from "../models/sensor_tempurate.js";

// POST
export const AddTempurateSensorValue = async (req, res, next) => {
  try {
    const { temperature, humidity } = req.body;

    // Check if the board exists
    /**const existingBoard = await Board.findOne({ board_name });
    if (!existingBoard) {
      return res.status(404).json("Board not found!");
    }
 */
    // Create a new temperature sensor instance with the board_id
    const temperaturesensor = new TemperatureSensor({
      temperature,
      humidity,
    });

    // Save the temperature sensor
    await temperaturesensor.save();

    return res.status(200).json({ success: true, sensor: temperaturesensor }); // Include board_name in the response
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
};
