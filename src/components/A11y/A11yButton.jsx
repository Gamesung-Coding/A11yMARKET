import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Settings2 } from 'lucide-react';
import A11yOverlay from './A11yOverlay';

export default function A11yButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setOpen(true)}
        className='fixed right-6 bottom-6 z-50 flex size-18 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700'
      >
        <Settings2
          className='size-10'
          strokeWidth={2}
        />
      </Button>

      {/* Overlay */}
      {open && (
        <A11yOverlay
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
