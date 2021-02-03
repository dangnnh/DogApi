import React,{ Component } from "react";
import './Css.css'

class Alllist extends Component{
    constructor(props){
        super(props);
        this.json = React.createRef();
    }
    async getApi(apiUrl){
        let apiAll = await fetch(apiUrl)
                        .then(respone => respone.json())
                        .then(value => value)
        apiAll = JSON.stringify(apiAll)
        this.json.current.value = apiAll;
    }
    componentDidMount(){
        this.getApi('https://dog.ceo/api/breeds/list/all');
    }
    render(){
        return (
                <div className="main">
                    <p>LIST ALL BREEDS</p>
                    <p className="link">https://dog.ceo/api/breeds/list/all</p>
                    <p>JSON</p>
                    <textarea ref={this.json} disabled></textarea>
                </div>
            );
    }
}
export default Alllist;