import { MdOutlineBrokenImage } from "react-icons/md";
import { BadRequestWrapper } from "./BadRequest.styled";

export const BadRequest = ({children}) => {
    return (
        <BadRequestWrapper>
            <p>{children}</p>
            <MdOutlineBrokenImage size={120} />
        </BadRequestWrapper>
    )
}