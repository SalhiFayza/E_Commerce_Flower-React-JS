import React from 'react';
import './My.css';
 const My = () => {
   return(
     <div className="fayzaa">
     <h2>Write Us</h2>
     <form action=""/>
         <input type="email" name="email" id="email" placeholder="Enter your email"/>
         <input type="text" name="name" id="name" placeholder=" enter your name"/>
         <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message here"></textarea>
         <input type="submit" value="Send"/>

 </div>
   )
 }
 export default My;
