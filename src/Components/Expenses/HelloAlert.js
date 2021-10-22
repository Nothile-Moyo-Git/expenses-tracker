import './HelloAlert.css';

// Is a part of HelloButton which is some test code used to play around with 
function HelloAlert(props){

    const classes = 'reactButton';
    const onClick = props.onClick;

    return(    
    <div onClick={onClick} className={classes}>{props.children}</div>
     );
}



export default HelloAlert;