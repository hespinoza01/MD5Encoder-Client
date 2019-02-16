import React, {Component} from 'react';
import './App.css';
import TextBox from './TextBox';
import BarButton from './BarButton';
import PopupResult from './PopupResult';
import EncodeResult from '../helpers/encode';

export default class App extends Component{
    constructor(...props){
        super(...props);

        this.state = {
            textToEncode: '',
            result: '',
            showPopup: false
        };

        this.handleClear = this.handleClear.bind(this);
        this.handleEncode = this.handleEncode.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleHidePopup = this.handleHidePopup.bind(this);
    }

    handleClear(){
        this.setState({
            textToEncode: ''
        });
    }

    handleEncode(){
        let _encodeURI = encodeURI(encodeURI(this.state.textToEncode));
        EncodeResult(_encodeURI, (response) => {
            console.log(response);
            this.setState({
                showPopup: !this.state.showPopup,
                result: (response) ? response.data : "Sorry! An error a ocurried."
            });
        });
    }

    handleInputChange(e){
        this.setState({
            textToEncode: e.target.value
        });
    }

    handleHidePopup(){
        this.setState({
            showPopup: !this.state.showPopup,
            result: ''
        });
    }

    render(){
        return(
            <div className="App">
                <h1 className="Main-Title">MD5 Encoder</h1>
                <TextBox value={this.state.textToEncode} onChange={this.handleInputChange}/>
                <BarButton onClearClick={this.handleClear} onEncodeClick={this.handleEncode}/>
                {
                    this.state.showPopup
                        ? <PopupResult onClick={this.handleHidePopup} result={this.state.result}/>
                        : null
                }
            </div>
        );
    }
}