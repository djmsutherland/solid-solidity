import { ethers } from 'ethers'
import abi from './Keyboards.json'

const contractAddress = '0xaAAe859a24fae748e9f6c9207f68603DB7fc7446'
const contractABI = abi.abi

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    return new ethers.Contract(contractAddress, contractABI, signer)
  } else {
    return undefined
  }
}
