import {
  initMulter,
  checkUploadError,
  createThumbnail,
  createThumbnailMultiple,
} from "../helper/FileHelper.js";
import MultipartException from '../exceptions/MultipartException.js'
import express from "express";

export default () => {
  const router = express.Router();
  router.route('/upload/single').post((req, res, next) => {
    // name속성이 myphoto인 경우에 대한 업로드를 수행 --> multer객체가 생성되고 설정 내용이 실행됨
    // <input type="file" name="myphoto" />
    const upload = initMulter().single('myphoto');

    upload(req, res, (err) => {
        // 에러여부를 확인하여 결과코드와 메지시를 생성한다.
        if (err) {
          return next(new MultipartException(err));
        }

        // 업로드 결과가 성공이라면 썸네일 생성 함수를 호출한다.
        try {
          createThumbnail(req.file);
        } catch(error) {
          return next(error);
        }
 
        // 준비한 결과값 변수를 활용하여 클라이언트에게 응답을 보냄
        res.sendResult(req.file);
    });
  });
  // public/07_upload_multi.html
  router.route("/upload/multiple").post((req, res, next) => {
    // 업로드 처리시 배열로 설정
    req.file = [];

    // name속성이 myphoto인 경우에 대한 업로드를 수행 --> multer객체가 생성되고 설정 내용이 실행됨
    // <input type="file" name="myphoto" />
    const upload = initMulter().array("myphoto");

    upload(req, res, (err) => {
      // 에러여부를 확인하여 결과코드와 메지시를 생성한다.
      if (err) {
        return next(new MultipartException(err));
      }

      // 업로드 결과가 성공이라면 썸네일 생성 함수를 호출한다.
      try {
        createThumbnailMultiple(req.file);
      } catch(error) {
        return next(error);
      }

      // 준비한 결과값 변수를 활용하여 클라이언트에게 응답을 보냄
      res.sendResult(req.file);
    });
  });
  return router;
};
