import { TrainModel, GenerateImage, GenerateImageFromPack } from "common/types";
import express from "express";
import { prisma } from "db";

const PORT = process.env.PORT || 8080;
const app = express();

// middleware
app.use(express.json());

app.post("/ai/training", async (req, res) => {});

app.post("/ai/generate", async (req, res) => {});

app.post("/pack/generate", async (req, res) => {});

app.get("/pack/bulk", async (req, res) => {});

app.get("/image/bulk", async (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
