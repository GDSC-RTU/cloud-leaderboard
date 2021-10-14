import TableRow from "./TableRow"
const Leaderboard = ({ participantData }) => {

    return (
        <div>
            <table className="main-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Student Name</th>
                        <th>Total Number of Skill Badges Completed</th>
                        <th># of Skill Badges Completed in Track 1</th>
                        <th># of Skill Badges Completed in Track 2</th>
                    </tr>
                </thead>
                <tbody>
                    {participantData.map((data) => (
                        <TableRow data={data} key={data["Student Email"]} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard