import {Link} from "react-router-dom"

function CardLink(props) {
    return ( 
        <>
            <Link to={props.url} className="h-32 w-3/6 bg-blue-900 rounded-lg mx-6">
                <div><p className=" text-5xl text-center mt-10">{props.name}</p>
                </div>
            </Link>
        </>
     );
}

export default CardLink;