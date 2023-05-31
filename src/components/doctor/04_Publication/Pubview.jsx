import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card , Breadcrumb} from 'react-bootstrap'
import "../../../Styles/doctor/04_Publication/Pubview.css"
import image1 from "../../../assets/Doctor/Images/rch1.png"
const Pubview = () => {
    return (
        <>
            <Container className='contpubview'>
                <Row style={{display:"flex",alignItems:"flex-start",marginTop:"40px",width:"50px"}}>
                    <Breadcrumb className='bg-transparent' style={{border:"none",width:"50px"}}>
                       <Breadcrumb.Item><Link to={"/"}>Home</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Card className='imgcontainer bg-transparent'>
                            <img src={image1} alt="..." />
                        </Card>

                    </Col>
                    <Col sm={8}>
                        <Card className='pubtitle bg-transparent'>
                            <div className="pubv-content">
                                <h2 style={{ color: '#fff' }}><b>Immune phenotypes classified by deep learning-based H&amp;E tissue analyzer
                                    demonstrate distinct immune landscape and transcriptomic features in ovarian cancer</b></h2>
                                <p style={{ color: '#fff' }}>Horyun Choi et al. - AACR (2023)</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Card className='pubauthor bg-transparent'>
                            <h1><b>Author Details</b></h1>
                            <div className="pubauthor-content">
                                <h3 style={{ color: 'white' }}>1University of Hawaii John A. Burns School of Medicine, Honolulu, HI,2Northwestern
                                    University Feinberg School of Medicine, Chicago, IL,3Lunit, Seoul, Korea, Republic of</h3>
                                {/* <p style={{ color: '#fff' }}>Horyun Choi et al. - AACR (2023)</p> */}
                            </div>
                        </Card>

                    </Col>
                    <Col sm={8}>
                        <Card className='pubabstract bg-transparent'>
                            <h1 style={{ color: "white" }}><b>Abstract</b></h1>
                            <div className="pubabstract-content">
                                <h3 style={{ color: 'white', textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada ante mauris, vitae aliquam turpis finibus eu. Nam scelerisque libero vel enim pellentesque porttitor. Nullam orci turpis, mattis non sollicitudin ut, congue vitae risus. Integer pretium dapibus lacus non eleifend. Suspendisse at suscipit elit. Aliquam sed lacus efficitur, auctor erat et, gravida velit. Mauris sed volutpat odio, id fermentum quam. Vestibulum ac nulla vel enim consectetur semper in quis quam. Cras id nulla lacus. In sapien elit, pellentesque ut euismod vel, gravida id enim. Praesent quis magna sed ligula sollicitudin varius.

                                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed finibus quis massa eget facilisis. Quisque facilisis eros nulla, ut accumsan nisl tincidunt posuere. Nulla lacinia suscipit eleifend. Proin sollicitudin suscipit ex feugiat gravida. Donec porta leo vitae facilisis aliquam. Ut laoreet est euismod turpis pellentesque faucibus. Donec viverra malesuada lectus a tincidunt. Sed iaculis bibendum quam in facilisis.

                                    Praesent vel mauris nibh. Aenean sagittis enim risus, id euismod elit sodales ut. Suspendisse potenti. Duis vulputate libero id sem mattis scelerisque. Suspendisse potenti. Donec rutrum leo a nulla egestas, nec semper nunc ornare. Integer in finibus turpis, a consectetur dolor. Vivamus ut augue justo. Duis interdum odio sed tortor commodo varius. Quisque a ligula tortor.

                                    In luctus odio sapien, id volutpat orci aliquet id. Aliquam sed turpis sed purus placerat porta. Ut pulvinar sem sit amet ante convallis, quis aliquet neque tincidunt. Morbi vel lorem venenatis, hendrerit leo id, ullamcorper justo. Donec eget bibendum enim. Suspendisse gravida ante nec leo ultrices commodo. Donec quis fermentum felis, ut aliquet est. Duis ultricies elit vitae lectus varius blandit. Curabitur hendrerit mi vel velit eleifend sollicitudin. Nullam condimentum orci sed nibh volutpat aliquam. Praesent sodales euismod facilisis. Nulla sagittis fermentum sem eget tempus. Ut vehicula, odio sed eleifend laoreet, urna lorem luctus neque, ut dapibus elit mauris et justo. Praesent sed malesuada risus, a ultricies sem. Suspendisse gravida, quam eget fermentum bibendum, libero turpis tincidunt sapien, quis rutrum dui metus at urna. Sed mollis, diam sed blandit lacinia, ex tellus hendrerit ex, sit amet faucibus dolor ante at libero.

                                    Nulla ac nibh vulputate, ultricies justo euismod, lobortis felis. Praesent vitae elit non tortor commodo dapibus. Suspendisse dictum sapien id feugiat semper. Vivamus iaculis nisi eu pretium sodales. Nulla nec libero non elit elementum mattis sed in nunc. Fusce sed purus sed elit elementum facilisis eget eu eros. Maecenas dolor sem, commodo vitae diam quis, commodo malesuada ante. Etiam sit amet dui et ante varius hendrerit ut ac felis. Vestibulum ligula eros, scelerisque ac nisl sit amet, tincidunt interdum nisl. Donec ornare viverra tempus. Sed efficitur pretium purus eu tristique. Ut mattis justo eget nisl bibendum, vitae fermentum libero mattis. Nam vel tellus ut enim volutpat tempor ac non augue. Nam efficitur pretium sem, id gravida ligula accumsan eu.</h3>
                                {/* <p style={{ color: '#fff' }}>Horyun Choi et al. - AACR (2023)</p> */}
                            </div>
                        </Card>  </Col>
                </Row>
            </Container>
            {/* <section className="pubv">
                <div className="pubhead">
                    <h1 style={{ background: 'black' }}>Publication</h1>
                </div>
                <div className="containerpub">
                    <div className="pubv-image">
                        <img style={{ height: '250px', width: '450px' }} src="pic44.jpg" />
                    </div>
                    <div className="pubv-content">
                        <h2 style={{ color: '#fff' }}><b>Immune phenotypes classified by deep learning-based H&amp;E tissue analyzer
                            demonstrate distinct immune landscape and transcriptomic features in ovarian cancer</b></h2>
                        <p style={{ color: '#fff' }}>Horyun Choi et al. - AACR (2023)</p>
                        <div className="abstract">
                            <h2 style={{ color: '#fff' }}><b>Abstract</b></h2>
                            <p style={{ color: 'blanchedalmond' }}>Deep learning-based H&amp;E slide analyzer, Lunit-SCOPE IO can
                                classify the tumor microenvironment as three immune phenotypes (IPs): inflamed, immune-excluded
                                and immune-desert. In our previous study, the IPs demonstrated distinct survival outcome and
                                immunologic landscape in endometrial cancer. To further explore the application of IPs in other
                                type of cancer, we applied Lunit-SCOPE in ovarian cancer (OV) and compared tumor
                                microenvironments based on the IPs.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Pubview