'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
	Button,
	FloatingInput,
	FloatingTextArea,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@grahas/ui';
import { phoneValidator } from '@grahas/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAction } from 'next-safe-action/hooks';
import { toast } from 'sonner';
import { z } from 'zod';

import { registrationAction } from '../../actions/registration';

type IFormData = {
	name: string;
	email: string;
	city: string;
	comment: string;
	mobileNumber: string;
};

const schema = z.object({
	name: z.string().min(1, { message: 'Name is required' }),
	email: z.string().email('Please enter a valid email address'),
	city: z.string().min(1, { message: 'City is required' }),
	comment: z.string().optional(),
	mobileNumber: z
		.string()
		.min(10, { message: 'Mobile number must be at least 10 digits' })
		.max(10, { message: 'Mobile number cannot exceed 10 digits' })
		.regex(phoneValidator, { message: 'Phone number is not valid' }),
});

export default function Registration() {
	const form = useForm<IFormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: '',
			mobileNumber: '',
			email: '',
			city: '',
			comment: '',
		},
	});
	const { execute, result, isExecuting } = useAction(registrationAction);

	useEffect(() => {
		if (!result || Object.keys(result).length <= 0) return;

		if (result?.data?.status === 200) {
			toast.success(result?.data?.msg);
			form?.reset();
		} else {
			toast.error(result?.data?.msg);
		}
	}, [form, result, result?.data]);

	useEffect(() => {
		if (!result.serverError) return;
		if (result.serverError) {
			toast.error(result.serverError);
		}
	}, [result.serverError]);

	const onSubmit = async (values: IFormData) => {
		execute(values);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="rounded-12 grid gap-24 px-12 py-24 lg:grid-cols-2"
			>
				{[
					['name', 'Name', 'text'],
					['mobileNumber', 'Mobile Number', 'numeric'],
					['email', 'Email', 'email'],
					['city', 'City', 'text'],
					['comment', 'Comment', 'text', 'textarea'],
				].map(([name, label, keyboard, type]) => {
					if (type === 'textarea') {
						return (
							<FormField
								key={name}
								control={form.control}
								name={name as keyof IFormData}
								render={({ field: inputField, fieldState }) => (
									<FormItem className="relative col-span-2 lg:col-span-1">
										<FormControl>
											<FloatingTextArea
												label={label}
												id={name}
												isError={!!fieldState.error}
												{...inputField}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						);
					}
					return (
						<FormField
							key={name}
							control={form.control}
							name={name as keyof IFormData}
							render={({ field, fieldState }) => (
								<FormItem className="col-span-2 lg:col-span-1">
									<FormControl>
										<FloatingInput
											label={label}
											id={name}
											type={keyboard}
											isError={!!fieldState.error}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					);
				})}
				<Button
					disabled={isExecuting}
					loading={isExecuting}
					className="col-span-2 max-w-[240px]"
				>
					Submit
				</Button>
			</form>
		</Form>
	);
}
