import React, { useId } from 'react'
import uuid from 'react-uuid'
export default function UseID() {
    console.log(useId(),"12345");
    console.log("11111",uuid());
    return (
        <div>

        </div>
    )
}
