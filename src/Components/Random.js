import React,{ Component } from "react";


class Random extends Component{
    constructor(props){
        super(props);
        this.jsonRandom = React.createRef();
        this.imgRandom = React.createRef();
        this.jsonRandom3 = React.createRef();
        this.imgRandom1 = React.createRef();
        this.imgRandom2 = React.createRef();
        this.imgRandom3 = React.createRef();
        this.random = this.random.bind(this);
        this.random3 = this.random3.bind(this);
    }
    async getApi(apiUrl){
        let api = await fetch(apiUrl)
                        .then(respone => respone.json())
                        .then(value => value)
        return api
    }
    async random(){
        let apiRandom = await this.getApi('https://dog.ceo/api/breeds/image/random')
        this.imgRandom.current.src = apiRandom['message']
        apiRandom = JSON.stringify(apiRandom)
        this.jsonRandom.current.value = apiRandom
    }
    async random3(){
        let apiRandom3 = await this.getApi('https://dog.ceo/api/breeds/image/random/3')
        this.imgRandom1.current.src = apiRandom3['message'][0]
        this.imgRandom2.current.src = apiRandom3['message'][1]
        this.imgRandom3.current.src = apiRandom3['message'][2]
        apiRandom3 = JSON.stringify(apiRandom3)
        this.jsonRandom3.current.value = apiRandom3
    }
    componentDidMount(){
        this.random()
        this.random3()
    }
    render(){
        return (
            <div className="main">
                <div className="random">
                    <p>DISPLAY SINGLE RANDOM IMAGE FROM ALL DOGS COLLECTION</p>
                    <div className="fetch">
                        <p className="link">https://dog.ceo/api/breeds/image/random</p>
                        <button onClick={this.random}>Fetch!</button>
                    </div>
                    <div className = "content">
                        <div className="json">
                            <p>JSON</p>
                            <textarea ref={this.jsonRandom} disabled></textarea>
                        </div>
                        <div className = "img">
                            <p>IMAGE</p>
                            <img alt="Dog" ref={this.imgRandom}></img>  
                        </div>
                    </div>
                </div>
                <div className="random3">
                <p>DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION</p>
                    <div className="fetch">
                        <p className="link">https://dog.ceo/api/breeds/image/random/3</p>
                        <button onClick={this.random3}>Fetch!</button>
                    </div>
                    <div className = "content">
                        <div className="json">
                            <p>JSON</p>
                            <textarea ref={this.jsonRandom3} disabled></textarea>
                        </div>
                        <div className = "img">
                            <p>IMAGE</p>
                            <img alt="Dog" ref={this.imgRandom1}></img>  
                            <img alt="Dog" ref={this.imgRandom2}></img> 
                            <img alt="Dog" ref={this.imgRandom3}></img> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Random;