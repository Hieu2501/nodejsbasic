const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const appRoot = require('app-root-path');

const uploadController = require('../Controllers/UploadController')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/image/");
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });



router.get('/', uploadController.uploadPage)
router.post('/avatar', upload.single('avatar'), uploadController.handleUploadFile)

module.exports = router;