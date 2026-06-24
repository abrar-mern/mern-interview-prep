import React from 'react'
import { ImageUrl } from '../utils/ImageUrl'

export const Avatar = ({ person, size='s'}) => {
    return (
        <div>
            <img 
            src={ImageUrl(person)}
            alt={person.name} 
            height={size}
            width={size}
            />
            <p>
                {person.name}
            </p>
        </div>
    )
}

