'use client'
import React, { useEffect, useState } from 'react'
import { Breadcrumb, Layout, Menu, theme, MenuProps, Button } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
const { Header } = Layout;


const items: MenuProps["items"] = [
    {
        key: "1",
        label: (
          <Link className="" href={"/"}>
            Home
          </Link>
        )
        
      },
    {
        key: 1,
        label:"Swap"
    },
    {
        key: 1,
        label:"Tokens"
    },

]


const NavBar = () => {
  
const owner= "0x3b635Cb3D05D90d335b9F93ABB739322c403ed49";
const { address, isConnected } = useAccount();
    const pathname = usePathname();

    const [current, setCurrent] = useState(
     pathname === "/" || pathname === ""
            ? "/"
            : pathname,
    );
    //or simply use const [current, setCurrent] = useState(location.pathname)        

    useEffect(() => {
        if (pathname) {
            if( current !== pathname ) {
                setCurrent(pathname);
            }
        }
    }, [pathname, current]);

    function handleClick(e: any) {
        setCurrent(e.key);
    }

  return (
    <Header className='flex items-center justify-center' style={{ display: 'flex', justifyContent: 'space-between' }}>
    {/* <div className="demo-logo" /> */}
    <Menu 
    onClick={handleClick}
    selectedKeys={[current]}
    theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item  key="1" >
            <Link href={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2" ><Link href={"/swap"}>Swap</Link></Menu.Item>
        <Menu.Item key="3"><Link href={"/tokens"}>Tokens</Link>
        </Menu.Item>
        {
          owner === address && <Menu.Item key="4"><Link href={"/admin"}>SetUP</Link></Menu.Item>
        }
        
        
        

      </Menu>
      
      
        <ConnectButton/>
        {/* <Button>Sign up</Button> */}
      
  </Header>
  )
}

export default NavBar