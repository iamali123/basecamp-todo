import React from 'react'
import '../UI/card.css'

const Card = (props) => {
	return (
		<div className="card-wrapper">
			{props.children}
		</div>
	)
}

export default Card
