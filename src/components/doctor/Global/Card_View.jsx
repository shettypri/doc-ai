/* eslint-disable react/prop-types */
// import "../../../Styles/doctor/Global/card.css"
import Card from 'react-bootstrap/Card';

const Card_View = (props) => {
    console.log(props);
    return (
        <>
            {/* <div className="card-main">
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
            </div> */}

            <Card style={{ width: '18rem', background: 'transparent', cursor: 'pointer',zIndex: '999' }}>
                <Card.Img variant="top" src={props.content.imageUrl} />
                <Card.Body>
                    <Card.Title >{props.content.title}</Card.Title>
                    {/* <Card.Text>
                        
                    </Card.Text> */}
                </Card.Body>
            </Card>
        </>
    )
}

export default Card_View