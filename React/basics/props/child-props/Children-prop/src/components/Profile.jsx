import React from 'react';
import {Card} from "./Card"
import {ImageUrl} from "../utils/ImageUrl"

export const Profile = () => {
    const person = {
        name : 'Aklilu Lemma',
        ImageId : 'OKS67lhm'
    }
    return (
        <div>
            <Card>
                <h2>
                    Welcome to Codegyaani
                </h2>
                <img src={ImageUrl(person)} alt={person.name} />
            </Card>
        </div>
    )
}