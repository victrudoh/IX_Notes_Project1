const express = require("express");
const galleryController = require("../controllers/gallery.controller");
// const isAuthenticated = require("../Middlewares/isAuthenticated");
// const { authorize } = require("../Middlewares/roleCheck");

const router = express.Router();

router.get("/", galleryController.getGalleryController);

module.exports = router;
