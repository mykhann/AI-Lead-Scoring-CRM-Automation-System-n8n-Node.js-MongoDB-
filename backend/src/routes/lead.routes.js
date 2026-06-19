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
      },
      {
        headers: {
          "X_WEBHOOK_API": process.env.WEB_HOOK_KEY,
        },
      }
    );

    return res.json({
      success: true,
      message: "Lead sent to automation pipeline",
      data: response.data,
    });
  } catch (error) {
    console.error("n8n Error Data:", error.response?.data);
    console.error("n8n Status Code:", error.response?.status);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;