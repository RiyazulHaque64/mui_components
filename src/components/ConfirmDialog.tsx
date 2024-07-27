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
import { grey, red } from "@mui/material/colors";

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
          padding: "10px 5px 10px 5px",
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "center", py: 0 }}>
        <NotListedLocationIcon sx={{ fontSize: "100px", color: red[500] }} />
      </DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2">{subTitle}</Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{ bgcolor: grey[500], "&:hover": { bgcolor: grey[600] } }}
        >
          No
        </Button>
        <LoadingButton
          loading={false}
          variant="contained"
          sx={{ bgcolor: red[500], "&:hover": { bgcolor: red[700] } }}
        >
          Yes
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
