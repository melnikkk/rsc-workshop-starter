'use server';

import { contactSchema } from '@/validations/contactSchema';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export async function updateContact(contactId: string, formData: FormData) {
  await slow();

  const data = Object.fromEntries(formData);

  const result = contactSchema.parse(data);

  await prisma.contact.update({
    data: result,
    where: {
      id: contactId,
    },
  });
}
