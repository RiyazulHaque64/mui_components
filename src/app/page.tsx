"use client";

import ConfirmDialog from "@/components/ConfirmDialog";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open
      </Button>
      <ConfirmDialog
        open={open}
        onClose={onClose}
        title="Are you sure to delete this item?"
        subTitle="You can't undo this operation!"
      />
    </>
  );
}
