const Photo = require("../models/Photos");
const fs = require("fs-extra");
/*
exports.createPhoto = async (req, res) => {
 const { imgTitle, imgDescription } = req.body;
  const { path } = req.file;
  const newPhoto = {
    imgTitle: imgTitle,
    imgDescription: imgDescription,
    imgPath: path,
  };

  const photo = new Photo(newPhoto);

  await photo.save();

  return res.json({ message: "Photo successfully saved" }, photo);
};

exports.getPhotos = async (req, res) => {
  const photos = await photo.find();
  return res.json(photos);
};

exports.getPhoto = async (req, res) => {
  const id = req.params;
  const photo = await photo.findById(id);
  return res.json({ Photo });
};

exports.deletePhoto = async (req, res) => {
  const { id } = req.params;
  const photo = await photo.findById(id); // HACER ELIMINADO LOGICO
  if (photo) {
    await fs.unlink(path.resolve(photo.imgPath));
  }
  return res.json({ message: "Photo deleted" });
};

exports.updatePhoto = async (req, res) => {
  const { id } = req.params;
  const { imgTitle, imgDescription } = req.body;
  const updatedPhoto = await Photo.findByIdAndUpdate(id, {
    imgTitle,
    imgDescription,
  });
  return res.json({ message: "Succesfully updated", updatedPhoto });
};
*/
