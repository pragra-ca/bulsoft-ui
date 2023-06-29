import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { BsBriefcaseFill,BsLinkedin,BsTwitter,BsMessenger} from "react-icons/bs";

 function IconHelper (icon) {
     switch(icon) {
       case 'FiMenu' : return <FiMenu />
       
       case  'BsLinkedin' : return <BsLinkedin />
       
       case  'BsTwitter' : return <BsTwitter />
       
       case  'BsMessenger' : return <BsMessenger />
       

       default: return <BsBriefcaseFill/>
     }
 }

 export default IconHelper;