const UserList = () => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>ORGANIZATION <img src="./assets/SVGS/filter.svg" className="pad"/> </th>
                    <th>USERNAME <img src="./assets/SVGS/filter.svg" className="pad"/> </th>
                    <th>EMAIL <img src="./assets/SVGS/filter.svg" className="pad"/></th>
                    <th>PHONE NUMBER <img src="./assets/SVGS/filter.svg" className="pad"/></th>
                    <th>DATE JOINED <img src="./assets/SVGS/filter.svg" className="pad"/></th>
                    <th>STATUS <img src="./assets/SVGS/filter.svg" className="pad"/></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>adedeji@lendsqr.com</td>
                    <td>08112417083</td>
                    <td>May 15, 2020 10:00 AM</td>
                    <td><span className="badge rounded-pill success-pill">Warning</span></td>
                    <td><img src="./assets/SVGS/ellipsis.svg" /></td>
                </tr>
            </tbody>
        </table>
    )
}

export default UserList