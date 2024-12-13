'use client';

import React, { useTransition } from 'react';
import { SearchIcon, SpinnerIcon } from './ui/icons';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';

  const router = useRouter();

  const [searching, startTransition] = useTransition();

  const handleChange = e => {
    e.preventDefault();
    startTransition(() => router.push(`?q=${e.target.value}`));
  };

  return (
    <form role="search">
      <input
        className="w-full pl-8 outline-offset-1"
        aria-label="Search contacts"
        name="q"
        placeholder="Search"
        type="search"
        defaultValue={q}
        onChange={handleChange}
        onSubmit={handleChange}
      />
      <div aria-hidden="true" className="absolute left-10 top-7">
        {searching ? (
          <div className="h-fit w-fit animate-spin">
            <SpinnerIcon width={16} height={16} className="text-gray-dark" />
          </div>
        ) : (
          <SearchIcon width={16} height={16} className="text-gray-dark" />
        )}
      </div>
    </form>
  );
}
