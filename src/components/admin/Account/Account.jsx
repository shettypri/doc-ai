import  {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "../../../Styles/admin/Account/Account.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {
    allAcceptedDoctorReducers,
    deleteDoctorByIdReducer,
    getPendingRequestReducers
} from "../../../App/Slice/adminSlice.js";
import Loading from "../../Alert/Loading"



const Account = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPendingRequestReducers("users"))
        dispatch(allAcceptedDoctorReducers())
    }, []);

    const {pendingRequestState,acceptedAllDoctorList,deleteListDoctorById} = useSelector(
        state => state.adminReducer
    )


    const handleclick = (Event) => {
        console.log(Event.img);
        console.log("hello");
    }
    const deleteDoctorById = (id) =>{
        console.log(id)
        dispatch(deleteDoctorByIdReducer(id))
        dispatch(allAcceptedDoctorReducers())
    }

    const navigate = useNavigate()
    return (
        <>
            <div className="list-main">   
                
                <div className="doctor-add-btn">
                    <Link to='/Account/PendingReq'>
                        Requests {pendingRequestState.data.length}
                    </Link>
                </div>

                <div className={"back-Button-css"}>
                    <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{color: "#ffffff",}}
                    onClick={()=>{
                        navigate("/Dashboard")
                    }}
                    />
                </div>
                
                <div className="loading">
                {(acceptedAllDoctorList.loading || deleteListDoctorById.loading)&&
                     <Loading/>
                }
                </div>
                ,
                {
                    (acceptedAllDoctorList.error || deleteListDoctorById.error) &&
                    <h1>
                        Error
                    </h1>
                }

                <div className="account-card">
                    {
                        acceptedAllDoctorList.data.length != 0 &&
                        acceptedAllDoctorList.data.map((doctor, index) => {
                            return (
                                <>
                                    {/*<center>*/}
                                        <div className="doctor-list" key={index}>
                                            <div className="delete-list">
                                                <section onClick={
                                                    ()=>deleteDoctorById(doctor.id)
                                                }>
                                                    <FontAwesomeIcon icon={faCircleXmark} size="xl"
                                                                       style={{color: "#ff0000",}}/>
                                                </section>
                                            </div>
                                            <div className="image-list">
                                                <img src={doctor.imageUrl} width={"100px"} height={"100px"}
                                                     onClick={handleclick}/>
                                            </div>
                                            <div className="doctor-details">
                                                <p>

                                                    {index + 1}) Dr. {
                                                    `${doctor.firstName} ${doctor.lastName}`
                                                }
                                                </p>
                                                <p>
                                                    {doctor.Specialization}
                                                </p>

                                            </div>

                                        </div>
                                    {/*</center>*/}
                                </>
                            )
                        })
                    }
                </div>
            </div>


        </>
    )
}

export default Account