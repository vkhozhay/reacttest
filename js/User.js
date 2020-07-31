function User({ data }) {
    return React.createElement(
        "tr",
        null,
        React.createElement(
            "td",
            null,
            data.firstName
        ),
        React.createElement(
            "td",
            null,
            data.lastName
        ),
        React.createElement(
            "td",
            null,
            data.dob
        )
    );
}