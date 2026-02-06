 function Card () {

    return (
        <div className="card  bg-light m-3 my-4 p-2 " style = {{width: "18rem"}} >
            <img src="https://picsum.photos/300/200" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
        </div>
    )
}
export default Card;