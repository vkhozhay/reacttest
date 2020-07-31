function Month({ color, month, handleOnMouseEnter, handleOnMouseLeave }) {

    return (
        <div
            className='month-item'
            style={{ backgroundColor: color }}
            onMouseEnter={() => handleOnMouseEnter(month)}
            onMouseLeave={handleOnMouseLeave}>
            {month + 1}
        </div>
    )
}