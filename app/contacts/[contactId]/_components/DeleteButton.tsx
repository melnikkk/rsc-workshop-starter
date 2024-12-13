'use client';

import Button from '@/components/ui/Button';

type Props = {
  onDeleteButtonClick: () => Promise<void>;
};

export default function DeleteButton({ onDeleteButtonClick }: Props) {
  return (
    <Button type="submit" theme="destroy" onClick={onDeleteButtonClick}>
      Delete
    </Button>
  );
}
