function Users({ users }) {
    return (
        <table className='users'>
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Date of birth</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User data={user} key={user.id} />)}
            </tbody>
        </table>
    )
}