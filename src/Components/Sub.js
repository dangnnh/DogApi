import React,{ Component } from "react";

class Sub extends Component{
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
        this.jsonSub = React.createRef();
        this.jsonImage = React.createRef();
    }
    async getApi(apiUrl){
        let api = await fetch(apiUrl)
                        .then(respone => respone.json())
                        .then(value => value)
        return api
    }
    async random(){
        let apiRandom = await this.getApi('https://dog.ceo/api/breed/hound/afghan/images/random')
        this.imgRandom.current.src = apiRandom['message']
        apiRandom = JSON.stringify(apiRandom)
        this.jsonRandom.current.value = apiRandom
    }
    async random3(){
        let apiRandom3 = await this.getApi('https://dog.ceo/api/breed/hound/afghan/images/random/3')
        this.imgRandom1.current.src = apiRandom3['message'][0]
        this.imgRandom2.current.src = apiRandom3['message'][1]
        this.imgRandom3.current.src = apiRandom3['message'][2]
        apiRandom3 = JSON.stringify(apiRandom3)
        this.jsonRandom3.current.value = apiRandom3
    }
    async getSub(){
        let apiAll = await this.getApi('https://dog.ceo/api/breed/hound/list')
        apiAll = JSON.stringify(apiAll)
        this.jsonSub.current.value = apiAll;
    }
    async getImage(){
        let apiAll = await this.getApi('https://dog.ceo/api/breed/hound/afghan/images')
        apiAll = JSON.stringify(apiAll)
        this.jsonImage.current.value = apiAll;
    }
    componentDidMount(){
        this.getImage()
        this.getSub()
        this.random()
        this.random3()
    }
    render(){
        return(
            <div className="main">
            <div className="top">
                <p>LIST ALL SUB-BREEDS</p>
                <p className="link">https://dog.ceo/api/breed/hound/list</p>
                <p>Returns an array of all the sub-breeds from a breed</p>
                <p>JSON</p>
                <div className="sub"><textarea ref={this.jsonSub} disabled></textarea></div>
            </div>
            <p>LIST ALL SUB-BREED IMAGES</p>
            <p className="link">https://dog.ceo/api/breed/hound/afghan/images</p>
            <p>Returns an array of all the images from the sub-breed</p>
            <p>JSON</p>
            <textarea ref={this.jsonImage} disabled></textarea>
            <div className="random">
                <p>SINGLE RANDOM IMAGE FROM A SUB BREED COLLECTION</p>
                <div className="fetch">
                    <p className="link">https://dog.ceo/api/breed/hound/afghan/images/random</p>
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
                <p>MULTIPLE IMAGES FROM A SUB-BREED COLLECTION</p>
                <div className="fetch">
                    <p className="link">https://dog.ceo/api/breed/hound/afghan/images/random/3</p>
                    <button onClick={this.random3}>Fetch!</button>
                </div>
                <p>Return multiple random dog images from a sub-breed, e.g. Afghan Hound</p>
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
export default Sub;