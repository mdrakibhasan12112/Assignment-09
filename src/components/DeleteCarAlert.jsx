'use client';

import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import { redirect } from 'next/navigation';
import { MdDeleteForever } from 'react-icons/md';

export function DeleteCarAlert({ cars }) {
  const { CarName, _id } = cars;

  const handleDelete = async () => {
      const { data: tokenData } = await authClient.token();
    const res = await fetch(`http://localhost:8080/explore-car/${_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'appliction/json',
        authorization: `Bearer ${tokenData?.token}`,
      },
    });
    const data = await res.json();
    redirect('/explore-car');
    // console.log(data);
  };

  return (
    <AlertDialog>
      <Button variant="danger" className={'rounded-none'}>
        <MdDeleteForever />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete car permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{CarName}</strong> and all
                of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
