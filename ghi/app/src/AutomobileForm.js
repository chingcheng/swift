import { useState } from "react";

export default function AutomobileForm({fetchAutomobiles, updateUnsold, models}) {
	const [color, setColor] = useState("");
	const [year, setYear] = useState("");
	const [vin, setVin] = useState("");
	const [model, setModel] = useState("");

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value);
    }


	const handleSubmit = async (event) => {
		event.preventDefault();
        const data = {};
        data.color = color;
        data.year =year;
        data.vin = vin;
        data.model_id = model;

		const automobileUrl = "http://localhost:8100/api/automobiles/";
		const fetchConfig = {
			method: "post",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		};

		const response = await fetch(automobileUrl, fetchConfig);
		if (response.ok) {
			const newAutomobile = await response.json();
			setColor("");
			setYear("");
			setVin("");
			setModel("");
            fetchAutomobiles()
        }
    }

	return (
        <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add new automobile</h1>
                <form onSubmit={handleSubmit} id="create-automobiles-form">
                  <div className="form-floating mb-3">
                    <input value={color} onChange={handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                    <label htmlFor="color">Color</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={year} onChange={handleYearChange} placeholder="Year" required type="number" name="year" id="year" className="form-control" />
                    <label htmlFor="year">Year</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={vin} onChange={handleVinChange} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                    <label htmlFor="vin">vin</label>
                  </div>
                  <div className="mb-3">
                        <select value={model} onChange={handleModelChange} required id="model" name="model" className="form-select">
                            <option value=''>Choose a model</option>
                            {models.map(model => {
                                return (
                                    <option key={model.id} value={model.id}>
                                        {model.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
        </div>
    )
}
