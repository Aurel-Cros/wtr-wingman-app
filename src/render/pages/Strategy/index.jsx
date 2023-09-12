import PitStrategy from './PitStrategy';
import Fuel from './Fuel';
import Tyres from './Tyres';

export default function Strategy() {
    return (
        <>
            <div className="layout-col">
                <div className='box data-box data-col outer align-center'>
                    <div>FLAG</div>
                    <h2>Timings</h2>
                </div>
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