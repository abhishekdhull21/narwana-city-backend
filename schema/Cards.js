const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  business_title: { type: String, required: true },
  tag_line: { type: String, required: false },
  address: { type: String, required: true },
  tags: { type: String, required: false },
  google_link: { type: String, required: false },
  contact_number: { type: String, required: true },
  whatsapp_no: { type: String, required: false },
  facebook_url: { type: String, required: false },
  other_social_media: { type: String, required: false },
  image: { type: String, required: false },
  description: { type: String, required: false },
  isActive: { type: Boolean, required: true, default: true },
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
