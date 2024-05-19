import './Calculator.css';
import { useState } from 'react';
export default function Calculator(){
    let[value,setValue]=useState('');
    let[total,setTotal]=useState('');
    const ema=()=>{
        if(value===""){
            return setTotal("Error");
        }
        else{
            setTotal(eval(value));
        }
    }
    
    
    return(
        <div className="container" style={{height:'100vh',width:'100%',display:'flex',justifyContent:"center",alignItems:"flex-start"}}>
            <div className="calculator">
                <form action="">
                    <h1> React Calculator</h1>
                    <div>
                        <input type="text" className="form-control" value={value} />
                    </div>
                    <p>{total}</p>
        
                        <div className="buttons">
                            <button className="button" type='button' value="7" onClick={(e)=>setValue(value+e.target.value)} >7</button>
                            <button className="button" type='button' value="8" onClick={(e)=>setValue(value+e.target.value)} >8</button>
                            <button className="button" type='button' value="9" onClick={(e)=>setValue(value+e.target.value)} >9</button>
                            <button className="button" type='button' value="+" onClick={(e)=>setValue(value+e.target.value)} >+</button>
                        </div>
                        <div className="buttons">        
                            <button className="button" type='button' value="4" onClick={(e)=>setValue(value+e.target.value)} >4</button>
                            <button className="button" type='button' value="5" onClick={(e)=>setValue(value+e.target.value)} >5</button>
                            <button className="button" type='button' value="6" onClick={(e)=>setValue(value+e.target.value)} >6</button>
                            <button className="button" type='button' value="-" onClick={(e)=>setValue(value+e.target.value)} >-</button>
                        </div>
                        <div className="buttons">
                            <button className="button" type='button' value="1" onClick={(e)=>setValue(value+e.target.value)} >1</button>
                            <button className="button" type='button' value="2" onClick={(e)=>setValue(value+e.target.value)} >2</button>
                            <button className="button" type='button' value="3" onClick={(e)=>setValue(value+e.target.value)} >3</button>
                            <button className="button" type='button' value="*" onClick={(e)=>setValue(value+e.target.value)} >*</button>
                        </div>
                        <div className="buttons">
                            <button className="button" type='button' value="C" onClick={(e)=>{setValue('');setTotal('')}} >C</button>
                            <button className="button" type='button' value="0" onClick={(e)=>setValue(value+e.target.value)} >0</button>
                            {/* <button className="button" type='button' value="=" onClick={(e)=>{setTotal(eval(value));ema()}} >=</button> */}
                            <button className="button equal" type='button' value="=" onClick={(e)=>{ema()}}>=</button>
                            <button className="button" type='button' value="/" onClick={(e)=>setValue(value+e.target.value)} >/</button>
                        </div>
                </form>
            </div>
        
        </div>
    )
}