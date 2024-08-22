import moment from 'moment'
import React from 'react'

const Time = ({ time }) => {
    const videTime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss")
    return (
        <div>
            <span className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs rounded-md">
                {videTime}
            </span>
        </div>
    )
}

export default Time