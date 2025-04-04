import nodemailer from 'nodemailer';
import { GMAIL_EMAIL, GMAIL_PASSWORD } from '$env/static/private';

let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: GMAIL_EMAIL,
		pass: GMAIL_PASSWORD
	}
});

transporter.verify(function (error, success) {
	if (error) {
		console.error(error);
	} else {
		console.log('Server is ready to take our messages');
	}
});

export default transporter;
