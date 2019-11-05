const nodeMailer = require('nodemailer');

module.exports = function(app) {
	app.post("/contactInfo", function(req, res) {
		let data = req.body.data;
		console.log(data.name);
		console.log("Name: " + data.name + ". Email: " + data.email + ". Message: " + data.message + ".");
		console.log("backend reached!");

		let transporter = nodeMailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: 'jessendasilva1@gmail.com',
				pass: "ahjqzhbboafhrjsc"
			}
		});
		let mailOptions = {
			replyTo: data.name + " " + data.email,
			to: 'jessendasilva1@gmail.com',
			subject: "Inquiry from Portfolio",
			text: data.message
		};
		/*
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message %s sent: %s', info.messageId, info.response);
		});
		*/
		//console.log(req.query.hello);
		res.send("success response from server");
	});

	//The 404 Route (ALWAYS Keep this as the last route)
	app.get("*", function(req, res) {
		res.send("404");
	});
};
  