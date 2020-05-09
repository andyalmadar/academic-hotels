import React from "react";

const ComboInput = (props) => {
	const { filterKey, options, onChangeValue, iconClass } = props;

	const changeOption = (e) => {
		const { value, dataset: { filterkey } } = e.target;

		onChangeValue({
			filterkey,
			value: value === "" ? null : value
		});
	}

	return (
		<>
			<div className="field">
				<div className="control has-icons-left">
					<div className="select" style={{ width: "100%" }}>
						<select style={{ width: "100%" }} data-filterkey={filterKey} onChange={changeOption}>
							{options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</div>
					<div className="icon is-small is-left">
						<i className={`fas ${iconClass}`}></i>
					</div>
				</div>
			</div>
		</>
	);
}

export default ComboInput;
