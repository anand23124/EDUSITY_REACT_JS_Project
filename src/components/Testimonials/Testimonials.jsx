import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'




const Testimonials = () => {

    const slider = useRef();
    let tx=0;


    const slideForward = () =>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }


  return (
    <div className='testimonials'>
            <img src={next_icon} alt="" className='nxt_btn' onClick={slideForward}/>
            <img src={back_icon} alt="" className='bck_btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user_info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Willian Jackson</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                 elit. A distinctio accusamus iusto corrupti doloremque. 
                                 Assumenda unde accusantium reiciendis natus eius officiis laboriosam 
                                nostrum, eveniet molestiae, atque incidunt ad cumque consequatur!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user_info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Michale Jackson</h3>
                                    <span>Edusity,UAE</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                 elit. A distinctio accusamus iusto corrupti doloremque. 
                                 Assumenda unde accusantium reiciendis natus eius officiis laboriosam 
                                nostrum, eveniet molestiae, atque incidunt ad cumque consequatur!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user_info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Willian Smith</h3>
                                    <span>Edusity,UK</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                 elit. A distinctio accusamus iusto corrupti doloremque. 
                                 Assumenda unde accusantium reiciendis natus eius officiis laboriosam 
                                nostrum, eveniet molestiae, atque incidunt ad cumque consequatur!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user_info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>James Jackson</h3>
                                    <span>Edusity,UP</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                 elit. A distinctio accusamus iusto corrupti doloremque. 
                                 Assumenda unde accusantium reiciendis natus eius officiis laboriosam 
                                nostrum, eveniet molestiae, atque incidunt ad cumque consequatur!
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Testimonials