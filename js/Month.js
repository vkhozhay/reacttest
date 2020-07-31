function Month({ color, month, handleOnMouseEnter, handleOnMouseLeave }) {

    return React.createElement(
        'div',
        {
            className: 'month-item',
            style: { backgroundColor: color },
            onMouseEnter: () => handleOnMouseEnter(month),
            onMouseLeave: handleOnMouseLeave },
        month + 1
    );
}