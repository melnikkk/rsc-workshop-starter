import { prisma } from '@/db';
import { redirect } from 'next/navigation';
import { routes } from '@/validations/routeSchema';

export async function deleteContact(contactId: string) {
  await prisma.contact.delete({ where: { id: contactId } });

  redirect('/');
}
