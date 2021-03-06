import React from 'react';
import Card from './Card';
//import { findByLabelText } from '@testing-library/react';

const Card_List = ({ robots }) => {

    return (
        <div>
            {
                robots.map((user, i) => {
                    return (<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />);
                })
            };
        </div>
    );
}
export default Card_List;