'use client'
import React, { useState } from 'react'
import token from "../abi/Token.json";
import { ethers } from 'ethers';
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useConnect, useDisconnect } from "wagmi";


const FaucetToken = () => {
  const { address, isConnected } = useAccount();
    
const t1 ="0x7816e5fb9169d0F57b342f54D2E57Dd3678827eb";
const t2 ="0xcC2c41ACF8025fE2B9DcE89128340363613E33F4"


    const [account, setAccount] = useState();

    const getFaucet = async() => {
        if(!account) {
            alert("not address")
            return
        }
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
              token.address,
              token.abi,
              signer
            );
            console.log('contract', contract);
            await contract.faucetToken(account);
        } catch (error) {
            console.log('error', error);
            
        }
      
        


    }

   


  return (
    <div className='flex space-x-3 w-[60%]'>
                {/* <label className='text-sm text-gray-300'>You receive</label> */}
            <input value={account} onChange={(e:any) => setAccount(e.target.value)}  className='w-full focus:outline-none border  px-3 py-2 rounded-lg text-xl' placeholder='Enter your wallet address (0x...)'/>
            {
                isConnected ?  <button onClick={getFaucet} className='border  px-3 py-2'>Faucet</button> :  <button onClick={useConnectModal} className='border  px-3 py-2'>Connect Wallet</button>
            }
           
            
            </div>
  )
}

export default FaucetToken