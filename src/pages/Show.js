import { useLoaderData, Form } from "react-router-dom";

const Show = () => {
    const cheese = useLoaderData();
    console.log(cheese)
    
    return(
        <div>
            <h1>{cheese.name}</h1>
            <h2>{cheese.title}</h2>
            <img src={cheese.image} alt={cheese.name} style={{height: 300}}/>

            <h2>Update {cheese.name}</h2>
            <Form action={`/update/${cheese._id}`} method='put'>
                <input type='input' name='name' placeholder="cheese's name" defaultValue={cheese.name}/>
                <input type='input' name='image' placeholder="cheese's image" defaultValue={cheese.image}/>
                <input type='input' name='countryOfOrigin' placeholder="cheese's countryOfOrigin" defaultValue={cheese.countryOfOrigin}/>
                <input type='submit' value={`update ${cheese.name}`}/>
            </Form>

            <h2>Delete person</h2>
            <Form action={`/delete/${cheese._id}`} method='post'>
                <input type='submit' value={`Delete ${cheese.name}`}/>
            </Form>
        </div>

    )
}

export default Show;