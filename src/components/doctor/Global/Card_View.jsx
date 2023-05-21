/* eslint-disable react/prop-types */
import "../../../Styles/doctor/Global/card.css"
const Card_View = (props) => {
    console.log(props);
    return (
        <>
            <div className="card-main">
                <div className="card-image">
                    <img src={props.content.imageUrl}  
                    height={"350px"}
                    width={"300px"}/>
                </div>

                <div className="card-title">
                    <p>
                        {props.content.title}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card_View