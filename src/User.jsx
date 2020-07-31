function User({ data }) {
    return (
        <tr>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.dob}</td>
        </tr>
    )
}