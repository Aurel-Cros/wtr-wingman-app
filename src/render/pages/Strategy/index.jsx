import PitStrategy from './PitStrategy';
import Fuel from './Fuel';
import Tyres from './Tyres';
import Flag from './Flag';
import Timings from './Timings';

export default function Strategy() {
    return (
        <>
            <div className="layout-col">
                <Flag />
                <Timings />
            </div>
            <div className="layout-col">
                <PitStrategy />
            </div>

            <div className="layout-col">
                <Fuel />
                <Tyres />
            </div>
        </>
    )
}