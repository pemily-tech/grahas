'use server';

import axios from 'axios';
import { z } from 'zod';

import { safeActionClient } from '../helpers';

interface IPayload {
	name: string;
	mobile: number;
	type: 'Other Inquiry';
	email?: string;
}

const schema = z.object({
	name: z.string().min(3, 'Name is required'),
	mobileNumber: z
		.string()
		.regex(/^[6-9]\d{9}$/, 'Please enter a valid mobile number')
		.refine((num) => num.length === 10, {
			message: 'Mobile number must be exactly 10 digits',
		}),
	email: z.string().optional(),
});

export const registrationAction = safeActionClient
	.schema(schema)
	.action(async ({ parsedInput }) => {
		const { mobileNumber, name, email } = parsedInput;
		const payload = {
			name,
			mobile: Number(mobileNumber),
			type: 'Other Inquiry',
			...(email?.trim() ? { query: email } : {}),
		} as IPayload;
		try {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_PATH}/lead/create`,
				payload
			);
			return {
				status: 200,
				msg: 'We have saved your details. Our team will contact you soon!',
			};
		} catch (error) {
			if (axios.isAxiosError(error)) {
				throw new Error(
					error.response?.data?.message || 'Failed to save details. Please try again!'
				);
			}
			throw new Error('Failed to save details. Please try again.');
		}
	});
