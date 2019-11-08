import React from "react";
import { Tab } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";

export default function TabNav() {
    const panes =[
        {menuItem: 'Home', render:() => <Tab.Pane as={NavLink} to='/'><WelcomePage/></Tab.Pane>},
        {menuItem: 'Characters', render:() => <Tab.Pane as={NavLink} to='/characters'><CharacterList/></Tab.Pane>},
        {menuItem: 'Locations', render:() => <Tab.Pane as={NavLink} to='/locations'><LocationsList/></Tab.Pane>},
        {menuItem: 'Episodes', render:() => <Tab.Pane as={NavLink} to='/episodes'><EpisodeList/></Tab.Pane>}
    ]
        return  <Tab panes={panes}/>
};
