/* eslint-disable react/prop-types */

const Home = (props) => {

    // props
    const { gridSize, updateGridSize, handleStartGame } = props

    return (
        <div className='home-container'>
            <h1 className='home-title'>Memory</h1>
            <div className='home-game-setting-container'>
                <div className='home-game-setting-options-wrapper'>
                    <h2 className='title'>Select Grid</h2>
                    <div className='options-list'>
                        <div
                            className={`option-item ${gridSize === 4 && 'active'}`}
                            onClick={() => updateGridSize(4)}
                        >
                            4 &#215; 4
                        </div>
                        <div
                            className={`option-item ${gridSize === 6 && 'active'}`}
                            onClick={() => updateGridSize(6)}
                        >
                            6 &#215; 6
                        </div>
                        <div
                            className={`option-item ${gridSize === 8 && 'active'}`}
                            onClick={() => updateGridSize(8)}
                        >
                            8 &#215; 8
                        </div>
                        <div
                            className={`option-item ${gridSize === 10 && 'active'}`}
                            onClick={() => updateGridSize(10)}
                        >
                            10 &#215; 10
                        </div>
                    </div>
                </div>
                <button
                    className='home-game-start-btn'
                    onClick={handleStartGame}
                >
                    Start Game
                </button>
            </div>
        </div>
    )

}

export default Home;
