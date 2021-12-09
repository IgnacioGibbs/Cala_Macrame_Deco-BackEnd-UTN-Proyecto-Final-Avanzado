const Photo = require("../models/Photos");
const fs = require("fs-extra");

exports.createPhoto = async ({ imgTitle, imgDescription, path }) => {
  try {
    const newPhoto = {
      imgTitle: imgTitle,
      imgDescription: imgDescription,
      imgPath: path,
    };
    const photo = new Photo(newPhoto);

    await photo.save();

    return photo;
  } catch (error) {
    console.log(error);
  }
};
