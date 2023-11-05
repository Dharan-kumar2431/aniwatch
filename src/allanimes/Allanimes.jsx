import Allanimecard from '../allanimecard/Allanimecard';
import './Allanimes.css'
import { Allanimeslist } from "../shared/animelist/Animelist";


const Allanimes = () => {
    return(
        <div>
            <Allanimecard data={Allanimeslist}/>
        </div>
    )
}

export default Allanimes;