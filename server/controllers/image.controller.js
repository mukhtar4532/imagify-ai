import userModel from "../models/user.model.js";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = req.user?._id || req.userId;

    if (!userId || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "Insufficient credit balance ",
        creditBalance: user.creditBalance,
      });
    }

    const encodedPrompt = encodeURIComponent(prompt);
    const randomSeed = Math.random().toString(36).substring(7);
    const imageUrl = `${process.env.POLLINATION_URL}/${encodedPrompt}?width=512&height=512&seed=${randomSeed}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      imageUrl,
    });
  } catch (error) {
    console.log("Pollination AI Error: ", error.message);
    res.json({ success: false, message: error.message });
  }
};
