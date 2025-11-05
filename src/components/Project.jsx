import "./Project.css"

export default function Project({title, image, onClick}){



    return (<div className="wrap" onClick={onClick}>
        <img className="image" src={image} />
        <h2 className="title-style">{title}</h2>
    </div>); 
}