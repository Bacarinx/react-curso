import MyComponent from "./MyComponent";
const FirstComponent = () => {
    //essa função faz isso: 
    return (
        
        <div>
            {/* Algum comentário*/}
            <h1>Meu primeiro componente</h1>
            <p className= "teste"></p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;

