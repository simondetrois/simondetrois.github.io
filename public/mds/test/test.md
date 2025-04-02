Data transfer should be encrypted for secure communication over a network. 
## SSL / TLS
- **Both**: SSL and TLS ensures, that the communication between the browser and the server is secure 
- **SSL** (Secure Socket Layer): Weaker than TLS because of vulnerability to POODLE or BEAST attacks, weaker cryptographic handshake algorithms (MD5, RC4) and slower performance due to inefficient handshake (is deprecated not used any longer)
- **TLS**: Mostly adopted and currently used - uses stronger key exchange mechanisms (AES, SHA-256, ChaCha20) and has an optimized handshake with session resumption

## TLS
- To enable a session with TLS encryption, a handshake first have to be made
1. The client (Browser) sends a ClientHello message to the server (the message contains Infos about the Browser, OS and supported encryption algorithms)
2. Based on the Infos of the ClientHello, the Browser chooses the type of encryption (default the most powerful one) and sends the ServerHello to the client, containing Infos about the Server, used encryption algorithm and also sends the SSL Certificate (containing domain name, CA and public key)
3. The client checks the SSL certificate to verify it's trustworthy and not expired. If so, the Browser generates a random session key, encrypts it with the Servers public key and sends it back to the Browser 
4. The Browser decrypts the session Key with its own private key and checks whether the decrypted session key matches the  previous generated key by the browser. If so, it sends a finished message back to the Client 
5. Browser sends a finish message back the server containing all previous handshake messages
![[Pasted image 20250330152048.png]]
## CA
- 
## mTLS
Mutual TLS - Hierbei wird nicht nur das Zertifikat vom Server überprüft, sondern der Client hat hierbei ebenfalls ein Zertifikat, welches vom Server überprüft wird

## OCSP
Das **Online Certificate Status Protocol** (**OCSP**) ist ein Netzwerkprotokoll , das es Clients ermöglicht, den Status von X.509 Zertifikaten bei einem Validierungsdienst abzufragen. Es ist im RFC 6960 beschrieben und ein Internetstandard.