import React from "react";
import Card from "./Card";
import Cristiano from "../Pictures/CristianoRonaldo.webp"
import Messi from "../Pictures/MessiFace.jpeg"
import Figo from "../Pictures/Luis Figo.jpeg"
import Owen from "../Pictures/Micheal Owen.webp"
import Delima from "../Pictures/Delima.jpeg"
import Pavel from "../Pictures/Pavel nedved.jpeg"
import Andriy from "../Pictures/Andriy.jpeg"
import Ronaldinho from "../Pictures/Ronaldinho.gif"
import Cannavaro from "../Pictures/cannavaro.jpeg"
import Kaka from "../Pictures/kaka.webp"
import Modric from "../Pictures/Luka_Modrić.webp"
import Benzema from "../Pictures/BENZEMA.png"
import ballondor from "../Pictures/Ballondorbackground.png"

const Flex = () => {
    return (
        <div className="flexbox">
            <Card person={Figo} name= "Luis Figo" face="Figo" year="2000" Biography="https://en.wikipedia.org/wiki/Lu%C3%ADs_Figo"></Card>
            <Card person={Owen} name= "Micheal Owen" face="Owen" year="2001" Biography="https://en.wikipedia.org/wiki/Michael_Owen"></Card>
            <Card person={Delima} name= "De lima Ronaldo" face="Delima" year="2002" Biography="https://en.wikipedia.org/wiki/Ronaldo_(Brazilian_footballer)"></Card>
            <Card person={Pavel}name= "Pavel Nedved" face="Pavel" year="2003" Biography="https://en.wikipedia.org/wiki/Pavel_Nedvěd"></Card>
            <Card person={Andriy} name= "Andriy Shevchenko" face="Andriy" year="2004" Biography="https://en.wikipedia.org/wiki/Andriy_Shevchenko"></Card>
            <Card person={Ronaldinho} name= "Gaucho Ronaldinho" face="Ronaldinho" year="2005" Biography="https://en.wikipedia.org/wiki/Ronaldinho"></Card>
            <Card person={Cannavaro} name= "Fabio Cannavaro" face="Cannavaro" year="2006" Biography="https://en.wikipedia.org/wiki/Fabio_Cannavaro"></Card>
            <Card person={Kaka} name= "Richard Kaka" face="Kaka" year="2007" Biography="https://en.wikipedia.org/wiki/Kaká"></Card>
            <Card person={Cristiano} name= "Cristiano Ronaldo	" face="Cristiano" year="2008" Biography="https://en.wikipedia.org/wiki/Cristiano_Ronaldo"></Card>
            <Card person={Messi} name= "Lionel Messi" face="Lionel" year="2009 - 2012" Biography="https://en.wikipedia.org/wiki/Lionel_Messi"></Card>
            <Card person={Cristiano} name= "Cristiano Ronaldo" face="Ronaldo" year="2013 - 2014" Biography="https://en.wikipedia.org/wiki/Cristiano_Ronaldo"></Card>
            <Card person={Messi} name= "Lionel Messi" face="Lionel" year="2015" Biography="https://en.wikipedia.org/wiki/Lionel_Messi"></Card>
            <Card person={Cristiano} name= "Cristiano Ronaldo" face="Ronaldo" year="2016 - 2017" Biography="https://en.wikipedia.org/wiki/Cristiano_Ronaldo"></Card>
            <Card person={Modric} name= "Luka Modric" face="Modric" year="2018" Biography="https://en.wikipedia.org/wiki/Luka_Modrić"></Card>
            <Card person={Messi} name= "Lionel Messi" face="Lionel" year="2019" Biography="https://en.wikipedia.org/wiki/Lionel_Messi"></Card>
            <Card person={Messi} name= "Lionel Messi" face="Lionel" year="2021" Biography="https://en.wikipedia.org/wiki/Lionel_Messi"></Card>
            <Card person={ballondor} name= "Not Awarded"  year="2020" Biography=""></Card>
            <Card person={Benzema} name= "Karim Benzema" face="Benzema" year="2022" Biography="https://en.wikipedia.org/wiki/Karim_Benzema"></Card>
        </div>
    )

}

export default Flex;