import React from 'react'
import './style.css'

const Card=(props) =>{
    const change = (e)=>{
        // console.log(e.target.id);
        let ids = e.target.id;
        // console.log(ids);
        if (props.elem.name === props.elem.name) {
            // className='showImg';
            // ids.isSucssed = !ids.isSucssed
            console.log(props.elem.name);
        }
    }
    return (
        <div className="grand">
        <img src={props.elem.src} id={props.elem.name} key={props.elem.id} onClick={change} className={props.elem.isSucssed ?  `showImg` : `hideImg`} alt=""/>
        </div>
    )
}
export default Card