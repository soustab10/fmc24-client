import db from "../../../db";
import userModel from "../../../models/user.m";

export default async function handler(req, res) {
  try {
    // Connect to the database
    await db();

    // Query the database
    const data = await userModel.find({});
    
    // Send the response with the data
    res.status(200).json({
      status: 200,
      data,
    });
  } catch (error) {
    // Handle database connection errors or query errors here
    console.error(error);
    res.status(500).json({
      status: 'Fail',
      error: 'Unable to connect to the database or fetch data',
    });
  }
}
