import { Link, useLoaderData } from "react-router-dom"


function Index(props){
    const items = useLoaderData()
    // console.log(items);
    return(
        items.map((item, index)=>{
            return <div key={item._id} className="indexItem">
                <Link to={`/${item._id}`}>
                    <h1>{item.product}</h1>
                </Link>
                <img src={item.image} alt={item.product}/>
            </div>
        })
    )
}

export default Index
