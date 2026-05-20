'use client';

import { AlertDialog, Button } from '@heroui/react';
import toast, { Toaster } from 'react-hot-toast';

export function BookingCancelAlert({ bookingId }) {
  const handleCancelBooking = async () => {
   const res = await fetch(`http://localhost:8080/my-bookings/${bookingId}`, {
    method: "DELETE",
    headers: {
     'content-type': 'application/json'
    }
   })
   const data = await res.json()
   toast.success('cancel booking')
   window.location.reload()
   // console.log(data);
  };

  return (
   <AlertDialog>
    <Toaster position='top-right'></Toaster>
      <Button
        className="px-5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 
                   dark:bg-rose-950/20 dark:hover:bg-rose-950/40 
                   dark:text-rose-400 text-xs sm:text-sm font-semibold 
                   rounded-xl border border-rose-100 dark:border-rose-900/30 
                   active:scale-98 transition-all duration-150"
      >
        Cancel Booking
      </Button>

      {/* Modal Content */}
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Booking?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                Are you sure you want to cancel this booking? This action cannot
                be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                No, Keep it
              </Button>
        <Button
         onClick={handleCancelBooking}
                slot="close"
                variant="danger"
                onPress={() => console.log('Booking Cancel Logic Here')}
              >
                Yes, Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
