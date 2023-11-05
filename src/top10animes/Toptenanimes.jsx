import Toptenanimecards from '../top10animecards/Toptenanimecards';
import './Toptenanimes.css';
import {Toptenanimelists} from '../shared/toptenanimelist/Toptenanimelist';

const Toptenanimes = () => {
    return(
        <div className='Toptenanimes'>
            <Toptenanimecards toptendata={Toptenanimelists}/>
        </div>
    )
}

export default Toptenanimes;