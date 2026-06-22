import React from "react";
import "./Profile.css"
import {Avatar} from "./Avatar";

export const Profile = () => {
  return (
    <div className="profile-wrapper">
        <Avatar
        size={200}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    
      <Avatar
        size={170}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={180}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
};
