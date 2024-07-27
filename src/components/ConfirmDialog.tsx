import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

const ConfirmDialog = ({
  open,
  onClose,
  title,
  subTitle,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subTitle: string;
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          position: "absolute",
          top: "10%",
          left: "30%",
          margin: 0,
        },
      }}
    >
      <DialogTitle>
        <IconButton>
          <NotListedLocationIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2">{subTitle}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
