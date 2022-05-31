import React from 'react'

let head={
    width: "80vw",
    color: "white",
    fontSize: "4vw",
    paddingTop: "2vw",
    textAlign:"center",
    height: "10vw"
}
export default function Header(props) {
    return (
       <div id="heading" style={head}>
           To-Do List

       </div>
    )
}

{
/*
Header.defaultProps={
    title: "Your Title Here"
};

Header.propTypes={
    title: PropTypes.string
};*/}
