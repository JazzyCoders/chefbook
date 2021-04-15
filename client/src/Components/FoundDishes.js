import React, { useState } from 'react'

export default function FoundDishes(props) {

    const [foundDishes, setFoundDishes] = useState(props.location.state ? props.location.state.found : "")

    return (
        <div>
            
        </div>
    )
}
