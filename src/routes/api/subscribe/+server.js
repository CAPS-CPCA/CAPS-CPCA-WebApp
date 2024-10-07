import { GMAIL_EMAIL } from '$env/static/private';
import transporter from '$lib/emailSetup.server.js';

export async function POST({ request }) {
	const { email } = await request.json();

	const sendTo = 'ubcfmpr-gcaps@mail.ubc.ca';

	const html = `<p>You have a new subscriber: ${email}</p>`;
	const message = {
		from: GMAIL_EMAIL,
		to: sendTo,
		subject: `New Subscription from CAPS-CPCA`,
		text: email,
		html: html
	};

	try {
		await transporter.sendMail(message);
		return new Response(JSON.stringify({ success: 'Your email has been recorded, thank you!' }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to send email' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
