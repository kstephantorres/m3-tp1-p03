import Footer from "./Footer";

const Main = (props) => {
    return (
        <div className="bg-primary min-h-screen flex flex-col">
            <div className="grow flex items-center justify-center">
            <h1 className="text-7xl font-bold text-l-complement text-center ">
            Hello {props.mensaje}!!!
            </h1>
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default Main;