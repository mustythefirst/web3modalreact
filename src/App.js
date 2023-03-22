import './App.css';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { Web3Button } from '@web3modal/react'
import { useAccount, useContract, useSigner } from 'wagmi'


function App() {
  const chains = [arbitrum, mainnet, polygon]
  const projectId = '05010eabfafee5ef0c9c4f3e2f52bfc1'

  const { provider } = configureChains(chains, [w3mProvider({ projectId })])
  const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  provider
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

  return (
    <>
      
      <WagmiConfig client={wagmiClient}>
      <h1>Web3Modal Demo</h1>
      <Web3Button />  
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default App;
