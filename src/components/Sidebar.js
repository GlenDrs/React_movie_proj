import React, { Component } from "react";
import Markdown from "react-textarea-markdown";

function Sidebar(){

  return (
     <div className="pg-sidebar">
              <div className="pg-sidebar-header">
                <h3>La Liste de ...</h3>
              </div>
              
            <textarea id="side-body" placeholder="Title" />
     </div>
        );

}

export default Sidebar;