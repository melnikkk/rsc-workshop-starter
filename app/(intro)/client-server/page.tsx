import ServerComponent from '@/app/(intro)/client-server/_components/ServerComponent';
import ClientComponent from '@/app/(intro)/client-server/_components/ClientComponent';
import { prisma } from '@/db';

export default function Page() {
  async function mutateData() {
    'use server';

    const data = await prisma.contact.findMany();

    return data[0].first as string;
  }
  return (
    <div>
      <ClientComponent mutateData={mutateData} content={<ServerComponent />}>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
