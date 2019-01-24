// Glboal Setup ReactBootstrap Components.
const { Button, ButtonGroup, FormGroup, Table} = ReactBootstrap;

const myButton = (
<div>
    <Button bsSize="large">Large button</Button>
</div>
);

class Header extends React.Compoent {
    constructor(props){
        super(props);
    }

    componentDidMount

    render(){
        return(
            <div>
                <h1>Header</h1>
            </div>
        );
    };
}
const MyBody = () => {
    return (
        <div>
            <h4>
                Body
                
            </h4>
        </div>
    );
}

const Footer = () => {
    return (
        <div>
            <h5>hi</h5>
        </div>
    );
};

const app = (
    <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
        <Header/>
        <MyBody/>
        <Footer/>
    </div>
);


const element = <h1>Hello, world</h1>;
ReactDOM.render(app, document.getElementById('root'));
