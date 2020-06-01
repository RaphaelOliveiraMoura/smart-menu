import React from 'react';

import { AiOutlineQrcode } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';
import QrReader from 'react-qr-reader';

import logo from '~/assets/logo.png';
import { useClientAuth } from '~/store/clientAuth';

import { Container } from './styles';

function Login() {
  const { signin } = useClientAuth();

  async function handleScanQRCode(payload) {
    if (payload) {
      await signin(1);
    }
  }

  return (
    <Container>
      <FiHelpCircle
        size={22}
        className="help-icon"
        onClick={() => handleScanQRCode('fake-payload')}
      />
      <img src={logo} alt="Smart Menu" />
      <header>
        <h1>
          Escaneie o QRCode presente na sua mesa e faça os pedidos de forma
          muito mais prática e eficiente !
        </h1>
        <AiOutlineQrcode size={45} />
      </header>
      <QrReader
        id="qrcode-reader"
        delay={300}
        onError={() => {}}
        onScan={handleScanQRCode}
        style={{ width: '100%' }}
      />
    </Container>
  );
}

export default Login;
