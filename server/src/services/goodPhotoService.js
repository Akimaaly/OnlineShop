/* eslint-disable prefer-template */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable spaced-comment */

const multer = require('multer');
const { nanoid } = require('nanoid');
const path = require('path');

//настройка движка хранения файла
const storage = multer.diskStorage({
  destination: './public/goodphotos',
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + '-' + nanoid() + path.extname(file.originalname),
    );
  },
});

//пишем функцию которая проверяет тип файла
//Проверяем не только расширение, но и mimetype(например: 'application/json' или 'image/jpeg')
function checkFileType(file, cb) {
  // разрешенные расширения
  const filetypes = /jpeg|jpg|png|gif/;
  //проверка расширения
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  //проверка mimetype
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  }
  return cb('Ошибка: Загрузите пожалуйста изображения!');
}

// переменную загрузки
const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 }, //ставим лимит на размер файла 2мб
  fileFilter: function (req, file, callback) {
    checkFileType(file, callback);
  },
}).single('image');

module.exports = upload;
