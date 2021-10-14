const TableRow = ({ data }) => {
    return (
        <tr>
            <td className = "rank">{data.rank}</td>
            <td>{data["Student Name"]}</td>
            <td>{data.totalLabs}</td>
            <td>{data["# of Skill Badges Completed in Track 1"]}</td>
            <td>{data["# of Skill Badges Completed in Track 2"]}</td>
        </tr>
    )
}

export default TableRow