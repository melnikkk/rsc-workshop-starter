'use client';

import React from 'react';

interface Props {
  content: React.ReactNode;
  children: React.ReactNode;
  mutateData: () => Promise<string>;
}

export default function ClientComponent({ content, children, mutateData }: Props) {
  console.log('Client component');
  // If we need browser stuff we need to create a client component
  return (
    <>
      <button
        className="rounded border border-red-500 p-4"
        // without "use server" mutateData will fail
        onClick={async () => {
          const data = await mutateData();
          alert(data);
        }}
      >
        Click me
        {content}
        {children}
      </button>
    </>
  );
}
