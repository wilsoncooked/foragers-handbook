import express, { Request, Response } from "express";
import { prisma } from "../../prisma/client";

const router = express.Router();

// GET /user
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(
      users.map((user) => ({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }))
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Unable to fetch users" });
  }
});

// POST /user
router.post("/", async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email } = req.body;
    const user = await prisma.user.create({
      data: { firstName, lastName, email },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Unable to create user" });
  }
});

export default router;
