'use server';

import { prisma } from '@/db';
import { redirect } from 'next/navigation';
import { routes } from '@/validations/routeSchema';
import { slow } from '@/utils/slow';

export async function createEmptyContact() {
  await slow();

  const contact = await prisma.contact.create({ data: {} });

  redirect(
    routes.contactIdEdit({
      contactId: contact.id,
    }),
  );
}
