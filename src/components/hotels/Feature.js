import React from "react";

const Feature = (props) => {
	const { icon, label } = props;

	return (
		<>
			<div className="control">
				<div className="tags has-addons">
					<span className="tag is-medium is-dark">
						<i className={icon}></i>
					</span>
					<span className="tag is-medium">{label}</span>
				</div>
			</div>
		</>
	);
}

export default Feature;
