import React from 'react'

const Dropdown = (props) => {

    const options = props.options
    const value = props.value
    const onChange = props.onChange

    return (
        <select name="type" id="type" onChange={(event) => onChange(event.target.value, event)}>
            {
                options.map(option => <option selected={value === option.value} value={option.value}>{option.text}</option>)
            }
        </select>
    )
}

export default Dropdown