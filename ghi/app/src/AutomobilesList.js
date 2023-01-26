import { useEffect, useState } from "react";

const AutomobileList = () => {
	const [automobileList, setAutomobileList] = useState([]);
    const fetchAutomobileList = async () => {
        const automobileListUrl = "http://localhost:8100/api/automobiles/";
        const  automobileListResponse = await fetch(automobileListUrl);
        if (automobileListResponse.ok){
            const data = await automobileListResponse.json();

            const automobileList = data.autos;
            setAutomobileList(automobileList);
        }
    }
	useEffect(() => {
		fetchAutomobileList();
	}, []);

	return (
		<table className="table table-striped mt-4 table-hover">
			<thead>
				<tr>
					<th>VIN</th>
					<th>Color</th>
					<th>Year</th>
					<th>Model</th>
					<th>Manufacturer</th>
				</tr>
			</thead>
			<tbody>
				{automobileList.map((automobile) => {
					return (
						<tr className="table-row" key={automobile.id}>
							<td>{automobile.vin}</td>
							<td>{automobile.color}</td>
							<td>{automobile.year}</td>
							<td>{automobile.model.name}</td>
							<td>{automobile.model.manufacturer.name}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
export default AutomobileList;
