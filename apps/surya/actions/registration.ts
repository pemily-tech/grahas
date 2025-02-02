'use server';

import { phoneValidator } from '@grahas/utils';
import { z } from 'zod';

import { prisma, safeActionClient } from '../helpers';

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

export const registrationAction = safeActionClient
  .schema(schema)
  .action(async ({ parsedInput }) => {
    const { name, email, city, comment, mobileNumber } = parsedInput;

    try {
      await prisma.dreamHouseRegistration.create({
        data: {
          name,
          email,
          city,
          comment: comment ? comment : '',
          mobileNumber,
        },
      });
      return {
        status: 200,
        msg: 'We have saved your details. Our team will contact you and share the information.',
      };
    } catch (error) {
      console.error(error);
      throw new Error('Failed to save details. Please try again.');
    }
  });
