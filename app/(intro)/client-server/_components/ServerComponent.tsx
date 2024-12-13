import { prisma } from '@/db';

export default async function ServerComponent() {
  console.log('ServerComponent');
  // Access the DB
  const data = await prisma.contact.findMany();

  return <div className="rounded border border-blue-500 p-4">Server component {data[0].first}</div>;
}
