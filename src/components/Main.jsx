import { useState } from "react";
import Footer from "./Footer";

const Main = (props) => {
    let [msj,setMsj] = useState('')
    return (
        <div className="bg-primary min-h-screen flex flex-col">
            <div className="grow flex items-center justify-center flex-col">
            <h1 className="text-7xl font-bold text-l-complement text-center ">
            Hello {props.mensaje} {msj}!!!
            </h1>
            <button 
                class="bg-l-primary hover:bg-b-primary text-l-complement font-bold py-2 px-4 rounded-full mt-7 text-2xl" 
                onClick={()=>setMsj(msj==='' ? msj='(from changed state)': msj='')}>
                    Click me
            </button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;