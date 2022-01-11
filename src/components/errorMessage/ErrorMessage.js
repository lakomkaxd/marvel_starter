import img from './error.gif';

const ErrorMesssage = () => {
    return (
        <img style={{ display: 'block', width: "250px", height: "250px",
        objectFit: 'contain', margin: "0 auto"}} alt="ERROR" src={img}/>
    )
}

export default ErrorMesssage;