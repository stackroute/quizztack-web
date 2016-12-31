import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import GamePlay from './GamePlay';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JeopardyGameplay from './JeopardyGameplay';

export default class CardChild extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={view:'points',
                question:'',
                redisQues:'',
                topic:[],
                cardQues:[],
                cName:'NscaledCard',content:this.props.points,question:'Points',posTop:this.props.top,posLeft:this.props.posL,open:false};
    this.openTile=this.openTile.bind(this);
    // this.setQuestions = this.setQuestions.bind(this);
    this.classChange = this.classChange.bind(this);
  }


  classChange()
  {
    if(this.state.cName=='ScaledCard')
    {
      this.setState({content:'*'});
      this.setState({cName:'NscaledCard'});
    }


  }


  componentDidMount()
  {


    var thisCopy = this;
    const socket = io();
    console.log("DidMount In Card Child");
    socket.emit("jGamePlay",function(msg)
         {
           thisCopy.setState({cardQues: msg});
           console.log("Checking Card's State:",this.state.cardQues);

         }.bind(this));      
  }

  // handleClick(row ,column)
  // {
  //   console.log("row is "+ row);
  //   console.log("column is "+ column);
  //    const socket = io();
  //   socket.emit('testMsg', 'testData');
  //   socket.on("selectedQues", function(data)
  //   {
  //     // console.log("Hello!! Card Will Open" +data\);
  //     // console.log("Selected Questions "+ data);

  //   counter++;
  //   if(openedCards==29)
  //   {
  //     alert("opened all the cards");
  //   }
  //   else
  //   {
  //   if(this.state.cName=='NscaledCard')
  //   {
  //     this.setState({cName:'ScaledCard'});
  //     this.setState({content:<JeopardyGameplay classChange={this.classChange} points={this.props.points} 
  //       limit={1}/>});
  //   }
  //   else
  //     if(this.state.cName=='ScaledCard' && counter==3)
  //   {
  //     openedCards++;
  //     this.setState({cName:'NscaledCard'});
  //     counter=0;
  //     this.setState({content:'*'});
  //   }
  // }
  //   }.bind(this));


  //   // socket.on("ques",function(msg)
  //   //     {
  //   //       console.log("Handle Click Event");
  //   //       socket.emit('cardFlip', 
  //   //         {msg: "Hello Controller!"}
  //   //         );
  //   //  });
  //   // console.log(e.target);
  //   // socket.emit("openCard", e);

  //   counter++;
  //   if(openedCards==29)
  //   {
  //     alert("opened all the cards");
  //   }
  //  else
  //  {
  //  if(this.state.cName=='NscaledCard')
  //  {
  //    this.setState({cName:'ScaledCard'});
  //    this.setState({content:<JeopardyGameplay classChange={this.classChange} points={this.props.points} limit={1}/>});
  //  }
  //  else
  //     if(this.state.cName=='ScaledCard' && counter==3)
  //  {
  //     openedCards++;
  //    this.setState({cName:'NscaledCard'});
  //     counter=0;
  //     this.setState({content:'*'});
  //  }
  // }

  // }

  openTile(row,col,question){

    if(!this.state.isCardOpen)
    {
      this.setState({isCardOpen:'ScaledCard'});
    }
    else
      if(this.state.isCardOpen)
    {
      this.setState({isCardOpen:false});
      this.setState({content:'*'});
    }

  }
  render()
  {
    const cardStyle = {
      width: this.props.cardWidth,
      height: this.props.cardHeight,
      marginLeft:15,
      marginTop:7,
      display: 'inline-block',
      textAlign: "center",
      top: '44%',
      left :'44%',
      backgroundColor: '#0E0983',
    }
      const jeopardyGameplay = this.state.isCardOpen ? 
        <JeopardyGameplay classChange={this.classChange} points={this.props.points} limit={1}/> :
        '*'
    return(
      <Card onClick={this.openTile.bind(this, this.props.row, this.props.col)} className={this.state.cName} style={cardStyle} >  <h4 className={this.state.question} style={{color:"#F4D03F" ,marginTop:17}} >{jeopardyGameplay}</h4></Card>
      );
  }
}
