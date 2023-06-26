import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
 function IconHelper (icon) {
  
     switch(icon) {
       case icon === 'FiMenu' :{
           return <FiMenu />
       }

       default: return <AiOutlineCloseCircle/>
     }
 }

 export default IconHelper;