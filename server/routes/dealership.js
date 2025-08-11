// routes/dealership.js
const express = require("express");
const XLSX = require("xlsx");
const Dealership = require("../models/Dealership"); // <-- make sure this path is correct

const router = express.Router();

// POST route - save form data
router.post("/", async (req, res) => {
  try {
    const newEntry = new Dealership(req.body);
    await newEntry.save();
    res.json({ message: "Form submitted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error saving data", error: err.message });
  }
});

// GET route - export data to Excel
router.get("/export", async (req, res) => {
  try {
    const data = await Dealership.find().lean(); // get all data

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dealerships");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });

    res.setHeader("Content-Disposition", "attachment; filename=dealership_data.xlsx");
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.send(excelBuffer);
  } catch (err) {
    res.status(500).json({ message: "Error exporting data", error: err.message });
  }
});

module.exports = router;
