// import { Link } from "react-router-dom";
import "./Dashboard.scss";
import data from '../../data'
import { useEffect, useState } from "react";

const Dashboard = () => {

    const [recipePost, setRecipePost] = useState('')

    useEffect(() => {
        (data.map(item => {
            // if (item.createdBy === 'Jane')
                setRecipePost(data)
            // console.log(item)
        }))
        console.log(recipePost)
    }, [data])

    return (
        <div className="dashboard">
            <div className="left-side">
                {data.map(item => (
                    <div className="posts" key={item.id}>
                        <img src={item.image} alt={item.name} width={250} height={150} style={{ objectFit: 'cover' }} />
                        <h3>{item.name}</h3>
                        <span>{item.category}</span>
                        <span>{item.rating}</span>
                        <span>{item.difficulty}</span>
                    </div>
                ))}
                {/* <span>
                    <h3>Ingredients</h3>
                    {recipePost.ingredients?.map((item, index) => (
                        <ul key={index}>
                            <li>{item}</li>
                        </ul>
                    ))}
                </span> */}
            </div>
            <div className="right-side">
                <form action="">
                    <input type="text" placeholder="Title" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Description" />
                    <input type="text" placeholder="Ingredients" />
                    <input type="text" placeholder="Steps" />
                    <button type="submit">Add Recipe</button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;
