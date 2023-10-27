import Image from 'next/image'
import Link from 'next/link'
import FaucetToken from './components/FaucetToken'

export default function Home() {

  
  return (
    <div className='min-h-screen  flex items-center justify-center  flex-col space-y-6'>
      <p className='text-5xl'>Faucet Token 1</p>
      <FaucetToken/>
      <p className='text-5xl'>Trade crypto and NFTs</p>
      <p className='text-5xl'>with confidence</p>

      <button className='border py-4 px-6 rounded-2xl'><Link href={"/swap"}>Get started</Link></button>

      
    </div>
  )
}
