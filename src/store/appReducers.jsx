import React, { useState } from "react";

const defaultState = {
  homeisActive: false,
  aboutisActive: false,
  humanisActive: false,
  blogisActive: false,
  podcastisActive: false,
  contactisActive: false,
  journeyisActive: false,
  showMenu: true,
  showModal: false,
  changeActiveAbout:()=>{},
  changeActiveBlog:()=>{},
  changeActiveContact:()=>{},
  changeActiveHome:()=>{},
  changeActiveHuman:()=>{},
  changeActiveJourney:()=>{},
  changeActivePodcast:()=>{}, toggleMenu:()=>{}
};

export const AppContext = React.createContext(defaultState);

const AppContextProvider = ({ children }) => {
  const [homeisActive, sethomeIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
 
  const [showModal, setShowModal] = useState(false);

  const [aboutisActive, setaboutIsActive] = useState(false);
  const [humanisActive, sethumanIsActive] = useState(false);
  const [blogisActive, setblogIsActive] = useState(false);
  const [podcastisActive, setpodcastIsActive] = useState(false);
  const [contactisActive, setcontactIsActive] = useState(false);
  const [journeyisActive, setjourneyIsActive] = useState(false);

 const toggleMenu = ()=>{
  setShowMenu(!showMenu)
  setShowModal(!showModal)
 }

  const changeActiveHome = () => {
    setcontactIsActive(false);
    sethomeIsActive(true);
    sethumanIsActive(false);
    setjourneyIsActive(false);
    setpodcastIsActive(false);
    setblogIsActive(false);
    setaboutIsActive(false);
  };
  const changeActiveAbout = () => {
    setcontactIsActive(false);
    sethomeIsActive(false);
    sethumanIsActive(false);
    setjourneyIsActive(false);
    setpodcastIsActive(false);
    setblogIsActive(false);
    setaboutIsActive(true);
  };
  const changeActiveContact = () => {
    setcontactIsActive(true);
    sethomeIsActive(false);
    sethumanIsActive(false);
    setjourneyIsActive(false);
    setpodcastIsActive(false);
    setblogIsActive(false);
    setaboutIsActive(false);
  };
  const changeActiveHuman = () => {
    setcontactIsActive(false);
    sethomeIsActive(false);
    sethumanIsActive(true);
    setjourneyIsActive(false);
    setpodcastIsActive(false);
    setblogIsActive(false);
    setaboutIsActive(false);
  };
  const changeActiveJourney = () => {
    setcontactIsActive(false);
    sethomeIsActive(false);
    sethumanIsActive(false);
    setjourneyIsActive(true);
    setpodcastIsActive(false);
    setblogIsActive(false);
    setaboutIsActive(false);
  };
  const changeActivePodcast = () => {
    setcontactIsActive(false);
    sethomeIsActive(false);
    sethumanIsActive(false);
    setjourneyIsActive(false);
    setpodcastIsActive(true);
    setblogIsActive(false);
    setaboutIsActive(false);
  };
  const changeActiveBlog = () => {
    setcontactIsActive(false);
    sethomeIsActive(false);
    sethumanIsActive(false);
    setjourneyIsActive(false);
    setpodcastIsActive(false);
    setblogIsActive(true);
    setaboutIsActive(false);
  };

  const value = {
    homeisActive,
    aboutisActive,
    humanisActive,
    blogisActive,
    podcastisActive,
    contactisActive,
    journeyisActive,
    showMenu, showModal,
    changeActiveAbout,
    changeActiveBlog,
    changeActiveContact,
    changeActiveHome,
    changeActiveHuman,
    changeActiveJourney,
    changeActivePodcast, toggleMenu
  };
  return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
};

export default AppContextProvider;
