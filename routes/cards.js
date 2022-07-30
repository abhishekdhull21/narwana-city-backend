var express = require("express");
var router = express.Router();
const CardModal = require("../schema/Cards");
/* GET users listing. */
router.get("/", async function (req, res, next) {
  console.log(req);
  try {
    const data = await CardModal.find().exec();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/:id", async function (req, res, next) {
  try {
    const data = await CardModal.find({ _id: req.params?.id }).exec();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.put("/:id", async function (req, res, next) {
  const body = req.body;

  const card = new CardModal(body);

  try {
    const result = await CardModal.updateOne({ _id: req.params?.id }, body);
    res.send({ result, body });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async function (req, res, next) {
  const body = req.body;
  const data = {
    business_title: body?.business_title,
    tag_line: body?.tag_line,
    address: body?.address,
    tags: body?.tags,
    google_link: body?.google_link,
    contact_number: body?.contact_number,
    whatsapp_no: body?.whatsapp_no,
    facebook_url: body?.facebook_url,
    other_social_media: body?.other_social_media,
    image: body?.image,
    description: body?.description,
    isActive: body?.isActive,
  };
  const card = new CardModal(data);

  try {
    await card.save();
    res.send(card);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
