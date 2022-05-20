import Header from "../componenets/Header"
import SectionButton from '../componenets/SectionButton';
import insomnia from '../images/insomnia.png';
import discord from '../images/discord.png'
import discord2 from '../images/discord2.png'
import twitter from '../images/twitter.png'
import React, { useEffect, useRef, useState } from "react"
import Product from '../componenets/Product'
import axios from 'axios'
import botDetection from "../antibot/index.js";
import LargeButton from "../componenets/LargeButton"
import SocialsButton from "../componenets/SocialsButton";
import { trueGray } from "tailwindcss/colors";



const Results = () => (
  <div id="results" className="text-white">
    Some Results
  </div>
)




async function dataCollection() {
  const humanData = await botDetection()
  axios.post('http://localhost:3001', humanData)
}


export default function Home() {
  
 

  const [prods, setProds] = useState(null)
  const [serverInvite, setServerInvite] = useState(null)
  const [twitterAccount, setTwitterAccount] = useState(null)
  //let renderedOutput;

  useEffect(() => {
    dataCollection()
   
  }, []);

  useEffect(() => {
    axios.get("https://boring-mclean-74ab64.netlify.app/.netlify/functions/api/stock").then(response => {
      setProds(response.data.map(item => <Product productName={item.name} price={item.price} desc={item.description} stock={item.stock} itemLink={item.purchaseLink}/>))
    });
  }, []);

  useEffect(() => {
    axios.get("https://boring-mclean-74ab64.netlify.app/.netlify/functions/api/media").then(response => {
      console.log(response.data)
      setServerInvite(response.data.discord)
      setTwitterAccount(response.data.twitter)
    });
  }, []);

  return (
    <div>
      <div className="resize-none">
        <div className="flex-grow flex items-center scroll bg-black text-white h-1/6">
          <div className="flex items-center ml-8">
            <a className="static items-stretch " href="./">
              <img src={insomnia} alt="logo" class="resize h-28 w-28" />
            </a>
            <div className="font-mono text-2xl font-medium"><h1 classname="font-mono"> Insomnia Labs</h1></div>
          </div>
          <div className="hidden lg:inline-block lg:space-x-28 lg:m-auto lg:pr-80">
            <SectionButton directName="Home" />
            <SectionButton directName="Products" href={"/#products"} />
            <SectionButton directName="Socials" href={"/#socials"}/>
          </div>
          <div className="absolute right-0">
            <a href={serverInvite} class="flex items-center space-x-3 lg:pr-52">
              <img src={discord} alt="discordLogo" class="resize h-12 w-12"></img> <p>Join Server</p>
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-b from-black to-indigo-500 h-screen flex">
          <div className="mx-auto my-auto">
            <h1 className="text-white text-center text-3xl font-mono pb-5">Insomnia Labs</h1>
            <h3 className="text-white text-center text-xl font-mono pb-5">Satisfying Your Automation Needs</h3>

            <div className="flex space-x-14 m-auto pb-plr">
              <LargeButton href="https://shoppy.gg/product/7mJJIsh" directName="Purchase" />
              <LargeButton directName={"Dashboard"} />
            </div>
          </div>
        </div>

      </div>
      <div className="bg-gradient-to-t from-black to-indigo-500 h-max pb-20" id="products">
        <h1 className="text-white text-center font-mono text-4xl pb-ptt pt-5 ">Products</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:mx-6 md:mx-6 m-20 justify-center pt-6">
          {prods}
        </div>

      </div>
      <div className="flex items-center justify-center h-hm bg-gradient-to-b from-black to-indigo-500">
        <div className="bg-indigo-700 rounded-2xl px-20 py-20 resize-x">
          <div className="resize-none flex flex-row space-x-10">
            <h1 className="text-white text-lg font-bold pl-5 pt-3" id="socials">Socials</h1>
            <SocialsButton directName={'Twitter'} socialsImage={twitter} href={twitterAccount}/>
            <SocialsButton directName={'Discord'} socialsImage={discord2} href={serverInvite} />
          </div>
        </div>
      </div>
    </div>
  )
}

