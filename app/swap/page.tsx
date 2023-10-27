'use client'
import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select } from 'antd';
import swap from "../abi/SwapTokens.json";
import { ethers } from 'ethers';
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";

const SwapPage = () => {
  const { address, isConnected } = useAccount();
    const [amountToken, setAmountToken] = useState(0);
    const [amountToken2, setAmountToken2] = useState();
    const [token1, setToken1] = useState();
    const [token2, setToken2] = useState();



    const { openConnectModal } = useConnectModal();

    const swapTokens = async () => {
      if(!token1) {
        alert('not token1')
        return
      }
      if(!token2) {
        alert('not token2')
        return
      }
      if(!amountToken) {
        alert('not token1')
        return
      }
      if(token1 === token2) {
        alert('token1 !== token2')

        return
      }
      
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        swap.address,
        swap.abi,
        signer
      );
      console.log('contract', contract, token1, token2, amountToken);
      const finalAmount = ethers.utils.parseUnits(amountToken.toString(), "ether");

      await contract.swap(token1,token2, finalAmount);

    }

    const getAddressToken =  async() => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        swap.address,
        swap.abi,
        signer
      );
      } catch (error) {
        
      }
    }

   

    const addressTokens = [
      {
        id: '1',
        label:'ADDRESS TOKEN 1',

        address: '0x6F89A5F4a5D847A85544325EFECe740fa8485c9f',
      },
      {
        id: '2',
        label:'ADDRESS TOKEN 2',
        address: '0x84102Fb0136BA116559dd4160156CEceBd3eE998',
      },
     
    ]

  
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
       
        <div className='flex flex-col border px-3 py-3 space-y-3 w-[30%] rounded-2xl'>
        <div>
            <p className='font-bold'>Swap</p>
           <div className='space-x-2 my-2'>
           <label className='text-sm text-gray-300'>Token 1</label>
           <Select  onChange={(data) => {
            setToken1(data);
              console.log('data 1',data);
            }}   size='large' placeholder='select token 1'>
          {
            addressTokens.map((token, index) =>{
              return <Select.Option  value={token.address}  key={index}  >{token.label}</Select.Option>
            } )
          }
         </Select>
           </div>
           <div className='space-x-2 my-2'>
           <label className='text-sm text-gray-300'>Token 2</label>

            {/* <input value={token2} onChange={(e:any) => setToken2(e.target.value)} className='border rounded-lg px-3 py-2' placeholder='token2'/> */}
            <Select  onChange={(data) => {
              setToken2(data);
              console.log('data 2',data);
            }}   size='large' placeholder='select token 2'>
          {
            addressTokens.map((token, index) =>{
              return <Select.Option  value={token.address}  key={index}  >{token.label}</Select.Option>
            } )
          }
         </Select>
           </div>
        </div>
        <div className='flex flex-col border rounded-lg px-3 py-2'>
                <label className='text-sm text-gray-300'>You receive</label>
            <input value={amountToken} onChange={(e:any) => setAmountToken(e.target.value)} type='number' className='border-none focus:outline-none  rounded-lg text-5xl' placeholder='0'/>
            
            </div>
        
       {
        isConnected ?  <button onClick={swapTokens} className='border py-4 rounded-lg font-bold'>Swap Token</button> :  <button onClick={openConnectModal} className='border py-4 rounded-lg font-bold'>Connect Wallet</button>
       }
       
        </div>
        

    </div>
  )
}

export default SwapPage