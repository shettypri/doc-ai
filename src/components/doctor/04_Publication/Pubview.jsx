import {React, useEffect} from 'react'
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom'
import {Container, Row, Col, Card} from 'react-bootstrap'
import "../../../Styles/doctor/04_Publication/Pubview.css"
import image1 from "../../../assets/Doctor/Images/rch1.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {getPublicationDataById, getPublicationFormData} from "../../../App/Slice/formSlice.js";
import login from "../../Login/Login.jsx";

const Pubview = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const publicationId =params.id

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        dispatch(getPublicationDataById(publicationId))
    }, []);
    const navigateBack = () => {
        window.history.back()
    }
    const {publicationById} = useSelector(state => state.formReducer)
    console.log(publicationById.data)
    return (
        <>
            <Container className='contpubview'>
                <Row>
                    <Col sm={1} style={{float: "left"}}>
                        <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{color: "white",}} onClick={navigateBack}/>
                    </Col>

                    <Col sm={6} xs={9} md={2} lg={4} className='pubimg'>
                        {/* <Card className='imgcontainer bg-transparent' style={{justifyContent:"center"}}> */}
                        <img src={publicationById.data.imageUrl} alt="..."/>
                        {/* </Card> */}

                    </Col>
                    <Col sm={1} xs={1} md={12} lg={1}>
                        <Card className='pubtitle bg-transparent'>
                            {/*title*/}
                            <h2><b>{publicationById.data.title}</b>
                            </h2>
                            {/*<p>Horyun Choi et al. - AACR (2023)</p>*/}
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} xs={4} md={4} lg={4}>
                        <Card className='pubauthor bg-transparent'>
                            {/*Author*/}
                            <h1>Author Details</h1>

                            <div className="pubauthor-content">
                                {
                                    publicationById.isExisted &&
                                    publicationById.data.authors.map((author,index)=>{
                                        return(
                                            <p key={index} style={{fontSize:'13px'}}> {index+1 }){" "}
                                                <span style={{cursor:'pointer',color:'blue'}}
                                                onClick={()=>
                                                {
                                                    window.open(author.profileLink,"_blank")
                                                }
                                                }
                                                >
                                     {author.name}
                                        </span> - {author.designation}
                                            </p>
                                        )
                                    })
                                }
                                </div>
                        </Card>
                        <div className="downpdf">
                            <button
                                onClick={()=>
                                    window.open( publicationById.data.refernceLink,"_blank")

                                }>
                                {/*    Pdf link*/}
                                To Read the full paper <span className='clickme'>Click here <FontAwesomeIcon
                                icon={faArrowRight} style={{color: "#ffffff"}}

                            /></span>
                            </button>
                        </div>

                    </Col>
                    <Col sm={1} md={8}>
                        <Card className='pubabstract bg-transparent'>
                            <h1>Abstract</h1>
                            <div className="pubabstract-content">
                                {/*Content*/}
                                <p>
                                    {
                                        publicationById.data.description
                                    }
                                </p>
                                {/* <p style={{ color: '#fff' }}>Horyun Choi et al. - AACR (2023)</p> */}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Pubview