import * as React from 'react'
import { useConnect } from 'wagmi'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { Button } from './ui/button'
import Image from 'next/image'
export function WalletOptions() {
  const { connectors, connect } = useConnect()

  console.log(connectors);
  return connectors.map((connector) => (
    <Button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </Button>
  ))
}


export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div>
      {ensAvatar && <Image alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}