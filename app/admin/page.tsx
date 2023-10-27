'use client'
import React, { useState } from 'react'
import { Button, Form, Input, message, Select, Space } from 'antd';
import { ethers } from 'ethers';
import swap from "../abi/SwapTokens.json";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import DefaultConnect from '../components/DefaultConnect';

const AdminPage = () => {
  const { address, isConnected } = useAccount();

    const t1 ="0x6F89A5F4a5D847A85544325EFECe740fa8485c9f";
    const t2 ="0x84102Fb0136BA116559dd4160156CEceBd3eE998";
    const [token1, setToken1] = useState();
    const [token2, setToken2] = useState();
    const [spender, setSpender] = useState("");
    const [amount, setAmount] = useState(0);
    const [addressToken, setAddressToken] = useState();

    const [amountLiquidity, setAmountLiquidity] = useState(0);

    const [addressUser, setAddress] = useState();
    const [account, setAccount] = useState();
    const [balance, setBalance] = useState("0");

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

    const onFinishSetToken = () => {
       
        setTokens();
       
        console.log("token", token1, token2);

      };

      const onFinishApprove = () => {
        setApprove();
        message.success('Submit success!');
        console.log("token", spender, amount);
        
   
      };

      const setApprove = async() => {
        if(!spender && !amount) {
          alert("not spender & amount")
          return
      }
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          swap.address,
          swap.abi,
          signer
        );
        
        console.log('contract', contract);
        const finalAmount = ethers.utils.parseUnits(amount.toString(), "ether");
        await contract.approve(spender, finalAmount);
    } catch (error) {
        console.log('error', error);
    }
      }

      const setTokens = async() => {
        if(!token1 && !token2) {
            return
        }
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
              swap.address,
              swap.abi,
              signer
            );
            console.log('contract', contract);
            await contract.setTokens(token1, token2);
        } catch (error) {
            console.log('error', error);
        }
       
      }
   
      const setLiquidity = async() => {
        if(!addressToken && !amountLiquidity) {
            return
        }
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
              swap.address,
              swap.abi,
              signer
            );
            console.log('contract', contract);
        const finalAmount = ethers.utils.parseUnits(amountLiquidity.toString(), "ether");

            await contract.addLiquidity(addressToken, finalAmount);
        } catch (error) {
            console.log('error', error);
        }
       
      }

      const getBalance = async() => {
        console.log('address token, acount', address, account);
        
        
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
              swap.address,
              swap.abi,
              signer
            );
            console.log('contract', contract);
       

           const balanceAccount =  await contract.balenceOf(address, account);
           let price = ethers.utils.formatUnits(balanceAccount.toString(), "ether");
           setBalance(price);
        } catch (error) {
            console.log('error', error);
        }
       
      }

      if(!isConnected) return (
        <DefaultConnect/>
      )
  return (
    <div className='mx-20 mt-20 flex flex-col items-center justify-center '>
        <h1>Set Token</h1>
        <div  className=' space-y-3'>
          <div>
            <p>TOKEN1</p>
            <input className='border px-3 py-2 rounded-lg' value={token1} onChange={(e:any) => setToken1(e.target.value)}/>
          </div>
          <div>
            <p>TOKEN2</p>
            <input className='border px-3 py-2 rounded-lg' value={token2} onChange={(e:any) => setToken2(e.target.value)}/>
          </div>
          <Button onClick={onFinishSetToken}>Set Tokens</Button>

        </div>
      <p className='mt-10'>Approve</p>
        <div className='space-y-3 mt-5'>
          <div>
            <p>SPENDER</p>
            <input className='border px-3 py-2 rounded-lg' value={spender} onChange={(e:any) => setSpender(e.target.value)}/>
          </div>
          <div>
            <p>AMOUNT</p>
            <input className='border px-3 py-2 rounded-lg' type='number' value={amount} onChange={(e:any) => setAmount(e.target.value)}/>
          </div>
          <Button onClick={onFinishApprove}>Approve</Button>

        </div>

        <p className='mt-10'>Add Liquidity</p>
        <div className='space-y-3 mt-5 mb-20'>
          <div>
            <p>TOKEN ADDRESS</p>
            <Select  onChange={(data) => {
              setAddressToken(data);
              console.log('address liquidity',data);
            }}   size='large' placeholder='select token 2'>
          {
            addressTokens.map((token, index) =>{
              return <Select.Option  value={token.address}  key={index}  >{token.label}</Select.Option>
            } )
          }
         </Select>
          </div>
          <div>
            <p>AMOUNT</p>
            <input className='border px-3 py-2 rounded-lg' type='number' value={amountLiquidity} onChange={(e:any) => setAmountLiquidity(e.target.value)}/>
          </div>
          <Button onClick={setLiquidity}>ADD LIQUIDITY</Button>

        </div>

        <p className='mt-10'>get balance {balance}</p>
        <div className='space-y-3 mt-5 mb-20'>
          <div>
            <p>TOKEN ADDRESS</p>
            <Select  onChange={(data) => {
              setAddress(data);
              console.log('address liquidity',data);
            }}   size='large' placeholder='select token 2'>
          {
            addressTokens.map((token, index) =>{
              return <Select.Option  value={token.address}  key={index}  >{token.label}</Select.Option>
            } )
          }
         </Select>
          </div>
          <div>
            <p>ACCOUNT</p>
            <input className='border px-3 py-2 rounded-lg'  value={account} onChange={(e:any) => setAccount(e.target.value)}/>
          </div>
          <Button onClick={getBalance}>Balance</Button>

        </div>
 
    </div>
    
  )
}

export default AdminPage