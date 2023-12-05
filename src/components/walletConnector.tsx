'use client';
import {
  createWeb3Modal,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme,
  useWeb3ModalAccount,
} from '@web3modal/ethers5/react';

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal();
  const state = useWeb3ModalState();
  const { themeMode, themeVariables, setThemeMode } = useWeb3ModalTheme();

  const { address, chainId, isConnected } = useWeb3ModalAccount();

  return (
    <>
      <button
        className='bg-blue-500 p-5 rounded-lg hover:opacity-60'
        onClick={() => open()}
      >
        Open Connect Modal
      </button>
      {/* <button onClick={() => open({ view: 'Networks' })}>
        Open Network Modal
      </button> */}

      {/* <pre>{JSON.stringify(state, null, 2)}</pre>
      <span>{address}</span> */}
    </>
  );
}
