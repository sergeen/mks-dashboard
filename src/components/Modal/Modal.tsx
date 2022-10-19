import {StyledModal} from "./Modal.styles";

type Props = {
  children: React.ReactNode[];
};

const Modal: React.FunctionComponent<Props> = ({children}) => {
  return <StyledModal>{children}</StyledModal>;
};

export default Modal;
