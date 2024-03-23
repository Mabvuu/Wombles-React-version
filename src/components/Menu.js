//Menu.js

import React from "react";
import { Route, Switch } from "react-router-dom";
import Mains from './Menucomponents/Mains';
import Salads from './Menucomponents/Salads';



function Menu(){
    return(
        <div>
           
            <Switch>
                <Route path="/menu/mains" component={Mains} />
                <Route path="/menu/salads" component={Salads} />
            </Switch>
        </div>
    )
}

export default Menu;