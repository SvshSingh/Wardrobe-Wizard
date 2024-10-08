const fs = require("fs");
const path = require("path");

const saveImages = (req, res, next) => {
  const messages = [];
  const uploadDir = path.join(__dirname, "../uploads");

  // Create the directory if it doesn't exist
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const errorOccurred = Object.keys(req.files).some((key) => {
    const file = req.files[key];
    const filePath = path.join(uploadDir, `${key}.${file.mimetype.split("/")[1]}`); // Save with the correct extension

    try {
      // Write the file directly instead of converting to base64
      fs.writeFileSync(filePath, file.data);
      messages.push(`${key} saved as an image file.`);
      return false; // No error, continue processing
    } catch (err) {
      messages.push(`Error saving ${key}: ${err.message}`);
      return true; // Error occurred, stop processing
    }
  });

  if (errorOccurred) {
    res.status(500).json({ message: messages.join("\n") });
  } else {
    res.status(200).json({ message: messages.join("\n") });
  }
  next();
};

module.exports = { saveImages };
