import React, { useState } from 'react'

const Input = () => {

	const [ val, setVal ] = useState('');

	return (
		<React.Fragment>

			{/* Disable current and future date in date input */}
			<input type="date" max={new Date(new Date().getTime()+(-1 * 86400000)).toISOString().slice(0,10)}/><br /><br />

			{/* Allow only text in input field*/}
			<input type="text" pattern="[A-Za-z]*" onChange={(e)=> setVal((v) => (e.target.validity.valid ? e.target.value : v))} value={val}/>

		</React.Fragment>
	) 
}

export default Input;