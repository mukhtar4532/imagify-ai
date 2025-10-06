import userModel from "../models/user.model.js";
import axios from "axios";

export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    if (!userId || !prompt) {
      return res.json({ success: true, message: "Missing Details" });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    console.log("User: ", user.name, user.email);

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "Insufficient credit balance ",
        creditBalance: user.creditBalance,
      });
    }

    // const formData = new FormData();
    // formData.append("prompt", prompt);

    const { data } = await axios.post(
      process.env.HF_API_URL,
      { prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.log(error.message);

    res.json({ success: false, message: error.message });
  }
};
