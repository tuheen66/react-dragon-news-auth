/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {

    const { title,  image_url, details, _id } = news

    return (
        <div className="card  bg-base-100 shadow-xl  mb-4 p-4">
            <figure><img src={image_url} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                {details.length > 200 ? <p>{details.slice(0, 200)}  <Link to={`/new/${_id}`} className="text-blue-400 font-bold">  Read more ...</Link></p>
                    : <p>{details}</p>}

            </div>
        </div>
    );
};

export default NewsCard;