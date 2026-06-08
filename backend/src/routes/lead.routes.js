import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // send to n8n
    const response = await axios.post(
      process.env.N8N_WEBHOOK_URL,
      {
        name,
        email,
        company,
        message,
      }
    );

    return res.json({
      success: true,
      message: "Lead sent to automation pipeline",
      data: response.data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;