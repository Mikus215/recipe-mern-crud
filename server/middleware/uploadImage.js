import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
      },
    filename: function(req, file, cb) {
        cb(null, new Date().getTime() + file.originalname);
      }
})

const upload = multer({
    storage: storage,
    limits: 1024 * 1024 * 5
})

export const uploadImage = upload.single('file')

export const uploadEnd = (req, res, next) => {
    next();
}


    
