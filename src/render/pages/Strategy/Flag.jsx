import './style.scss';
export default function Flag() {

    // GET FLAG

    const flag = "checkered";

    let checkeredFlag = [];
    let color = 0;
    for (let i = 0; i < 36; i++) {
        const square = <p className={'color' + (color + 1)} key={i}></p >
        checkeredFlag.push(square);
        color = color ? 0 : 1;

    }

    return (
        <div className='box data-box data-row justify-center'>
            <div className={`flag ${flag !== "checkered" ? flag : ''}`}>
                {
                    flag === "checkered" ? checkeredFlag.map(a => a) : null
                }
            </div>
        </div>
    )
}