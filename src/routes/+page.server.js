import { GMAIL_EMAIL } from '$env/static/private';
import transporter from '$lib/emailSetup.server.js';

// default form action
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const sendTo = 'nanogo9152@rowplant.com';
		const email = formData.get('email');
		const subject = 'New subscriber' + email;

		let html = `<p>New subscriber: ${email}</p>`;

		const message = {
			from: GMAIL_EMAIL,
			to: sendTo,
			subject: subject,
			text: email,
			html: html
		};

		const sendEmail = async (message) => {
			await new Promise((resolve, reject) => {
				transporter.sendMail(message, (error, info) => {
					if (error) {
						reject(error);
					} else {
						resolve(info);
					}
				});
			});
		};

		await sendEmail(message);

		return {
			status: 200,
			success: 'Email sent successfully'
		};
	}
};
