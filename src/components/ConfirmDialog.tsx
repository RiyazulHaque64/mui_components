import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

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
      <DialogTitle sx={{ textAlign: "center", py: 0 }}>
        <NotListedLocationIcon sx={{ fontSize: "100px", color: red[500] }} />
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2">{subTitle}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <LoadingButton loading={false} variant="outlined">
          Submit
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
