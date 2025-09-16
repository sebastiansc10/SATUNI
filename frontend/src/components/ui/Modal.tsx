// /components/ui/Modal.tsx
import React from 'react';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';  // Si no tienes esta librería, puedes instalarla usando npm o yarn

// Asegúrate de instalar @reach/dialog si no lo tienes:
// npm install @reach/dialog

export function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <Dialog isOpen onDismiss={onClose}>
      <DialogOverlay>
        <DialogContent className="p-6 bg-white rounded-md max-w-lg mx-auto">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ❌
          </button>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
