const express=require("express");
const router=new express.Router()
const multer = require('multer');
const { handleCreateUser, handleUserLogin } = require("../controllers/user.controller");
const validateSchema = require("../middlewares/validateSchema");
const { createUserSchema } = require("../schemas/user.schema");
const authToken = require("../middlewares/authToken");

const path = require('path');
const { handleCreateApartmentInDb, handleUploadImages } = require("../controllers/apartment.controller");
const storage = multer.diskStorage({
    destination:"../front/public/apartments-images/",
    filename: (req, file, callback) => {
      const filename =req.query.email+"-"+Date.now()+"-"+file.originalname
      console.log("file",file)
      callback(null, filename);
    },
});
const upload = multer({ 
     storage,
    fileFilter: (_, file, callback) => {
        const filetypes = /jpeg|jpg|png|jfif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    
        if (mimetype && extname) {
          return callback(null, true);
        }
    
        return callback(new Error('Only JPEG, JPG, jfif, and PNG file types are allowed.'));
    },
    limit:{
        fileSize:100*1024*1024
    } 
});
const sendEmail = require("../mail/sendMail");
const getHtmlForValidationNumberMail = require("../mail/getHtmlForValidationNumberMail");


router.post("/new-user",validateSchema(createUserSchema),handleCreateUser)

router.post("/login",handleUserLogin)

router.post("/new-apartment",authToken,handleCreateApartmentInDb)

router.patch("/upload-images",upload.array("images",6),handleUploadImages)

router.post("/mail",async(req,res)=>{
  const verifyNumber=123456
  try{
    const info=await sendEmail({
      to:req.body.mail,
      subject:"אימות מייל",
      html:getHtmlForValidationNumberMail(verifyNumber)
    })
    console.log("ss",info)
    res.send({success:true,verifyNumber})
  }catch(err){
    res.status(500).send({success:false})
    console.log({err})
  }
})

module.exports=router;