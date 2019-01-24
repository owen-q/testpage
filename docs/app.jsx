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

//---------- Body
const MyTable = () => {
    return (
        <div>
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
};

const MyBody = () => {
    return (
        <div>
            <h4>
                Body
                <MyTable />
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
