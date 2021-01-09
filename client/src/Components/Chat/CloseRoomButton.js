import Button from "@material-ui/core/Button";
import "./Style.css";

const CloseRoomButton = (props) => {
	return (
		<Button
			variant="contained"
			color="primary"
			className="close-room-button"
		>
			Close Room
		</Button>
	);
};

export default CloseRoomButton;
