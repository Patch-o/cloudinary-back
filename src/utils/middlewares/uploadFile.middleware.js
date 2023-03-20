const multer = require('multer');//Stores the image during the upload of the img
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'players',
        allowedFormats: ['jpg','png','gif','glb','gltf','mp3','mp4','ogg']
    }
});

const upload = multer({storage});

module.exports= upload;