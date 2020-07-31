function Users({ users }) {
    return React.createElement(
        'table',
        { className: 'users' },
        React.createElement(
            'thead',
            null,
            React.createElement(
                'tr',
                null,
                React.createElement(
                    'th',
                    null,
                    'First name'
                ),
                React.createElement(
                    'th',
                    null,
                    'Last name'
                ),
                React.createElement(
                    'th',
                    null,
                    'Date of birth'
                )
            )
        ),
        React.createElement(
            'tbody',
            null,
            users.map(user => React.createElement(User, { data: user, key: user.id }))
        )
    );
}