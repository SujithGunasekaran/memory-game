/* eslint-disable react/prop-types */


const GameBoard = (props) => {

    // props
    const {
        gridSize,
        numbers,
        selectedPair,
        matchedPair,
        handleGridSelect,
    } = props;

    return (
        <div
            className='game-board'
            style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(70px, 1fr))` }}
        >
            {
                numbers.map((number, index) => (
                    <div
                        key={index}
                        className={`game-board-item ${selectedPair.includes(index) ? 'selected' : ''} ${selectedPair.length === 2 ? 'disable' : ''} ${matchedPair.includes(index) ? 'matched' : ''}`}
                        onClick={() => handleGridSelect(index)}
                    >
                        {
                            (selectedPair.includes(index) || matchedPair.includes(index)) ? number : ''
                        }
                    </div>
                ))
            }
        </div>
    )

}

export default GameBoard;
