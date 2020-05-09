import React from "react";
import moment from "moment";
import "moment/locale/es";

const DateInput = (props) => {
	const { filterKey, onChangeValue, value, iconClass } = props;
	
	const valueFormatted = value.format('YYYY-MM-DD');
	const nowFormatted = moment().format('YYYY-MM-DD');

	const changeDate = (e) => {
		const { value, dataset: { filterkey } } = e.target;

		onChangeValue({
			filterkey,
			value: moment(value).isValid() ? moment(value) : moment(valueFormatted)
		});
	}

	return (
		<>
			<div className="field">
				<div className="control has-icons-left">
					<input className="input" data-filterkey={filterKey} type="date" value={valueFormatted} min={nowFormatted} onChange={changeDate} required="required" />
					<span className="icon is-small is-left">
						<i className={`fas ${iconClass}`}></i>
					</span>
				</div>
			</div>
		</>
	);
}

export default DateInput;
