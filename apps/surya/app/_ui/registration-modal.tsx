'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@grahas/ui';

import Registration from './form';

export default function RegistrationModal() {
  const [show, setShow] = useState(true);
  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Register your Interest</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Registration />
      </DialogContent>
    </Dialog>
  );
}
