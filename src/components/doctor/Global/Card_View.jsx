/* eslint-disable react/prop-types */
// import "../../../Styles/doctor/Global/card.css"
import Card from 'react-bootstrap/Card';

const Card_View = (props) => {
    // console.log(props);
    return (
        <>


            <Card style={{ width: '18rem', background: 'transparent', cursor: 'pointer',zIndex: '99' }}>
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