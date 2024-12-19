const express = require("express")
const authroutes = express.Router()
const controller = require("../controllers/auth.controller")
const authmiddleware = require("../middleware/auth.middleware")
authroutes.route("/").post(controller.Signup)
authroutes.route("/authverify/:id").get(controller.MailVerification)
authroutes.route("/signin").post(controller.Signin)
authroutes.route("/view").get(authmiddleware, controller.ViewAll)
authroutes.route('/accessprofile').get(authmiddleware, controller.AccessProfile)
authroutes.route('/updateprofile').put(authmiddleware, controller.UpdateProfile)
authroutes.route('/deleteprofile').delete(authmiddleware, controller.DeleteProfile)
module.exports = authroutes