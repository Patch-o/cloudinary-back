const cloudinary = require('cloudinary').v2;

const deleteFile = (imgUrl) => {
    const imgSplited = imgUrl.split('/');//separate url by /
    const nameSplited = imgSplited[imgSplited.length - 1].split('.');//separate file name
    const folderSplited = imgSplited[imgSplited.legth -2];//instance the folder of the img
    const imgToDelete = `${folderSplited}/${nameSplited[0]}`;//concat both
    cloudinary.uploader.destroy(imgToDelete, () => {
        console.log("image deleted successfully");
    })
};

module.exports= {deleteFile}; 