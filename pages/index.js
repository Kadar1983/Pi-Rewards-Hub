import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [piID, setPiID] = useState("");
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [logs, setLogs] = useState([]);
  const APP_WALLET = "GCCHCMOZSM53I4SKWNO6CCJHOH5WXAPRPK3LLTXE6PCQTQWOV54LQVSP";

  const addLog = (text) => {
    setLogs((s) => [{ t: text, ts: new Date().toLocaleString() }, ...s].slice(0, 40));
  };

  const handleAuth = async () => {
    if (!window.Pi) return alert("Open inside Pi Browser.");
    if (!piID) return alert("Enter your Pi ID.");
    try {
      addLog("Authenticating...");
      const authUser = await window.Pi.authenticate({ PiID: piID });
      setUser(authUser);
      const userBalance = await window.Pi.getBalance({ PiID: piID });
      setBalance(userBalance);
      addLog("Authenticated: " + authUser.PiID);
    } catch (e) {
      addLog("Authentication failed.");
      console.error(e);
    }
  };

  const sendPi = async () => {
    if (!user || !amount) return alert("Login and enter amount first.");
    try {
      addLog(`Sending ${amount} π...`);
      const tx = await window.Pi.makePayment({ fromUser: user, toApp: APP_WALLET, amount: parseFloat(amount) });
      addLog("TX Success: " + tx.id);
      const updated = await window.Pi.getBalance({ PiID: piID });
      setBalance(updated);
      setAmount("");
    } catch (e) {
      addLog("Transaction failed.");
      console.error(e);
    }
  };

  return (
    <>
      <Head>
        <title>Pi Rewards Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://sdk.minepi.com/pi-sdk.js" defer></script>
      </Head>

      <div className="container">
        <div className="header">
          <div className="brand">
            <div className="logo">π</div>
            <div>
              <div className="title">Pi Rewards Hub</div>
              <div className="small">Testnet · Pi Browser</div>
            </div>
          </div>
          <div className="pill">App Wallet: {APP_WALLET.slice(0,6)}…{APP_WALLET.slice(-6)}</div>
        </div>

        <div className="grid">
          <div className="card">
            <h3>Connection</h3>
            {!user ? (
              <>
                <p className="small">Login with your Pi ID</p>
                <div className="form-row">
                  <input className="input" placeholder="Enter Pi ID" value={piID} onChange={(e)=>setPiID(e.target.value)} />
                  <button className="btn" onClick={handleAuth}>Login</button>
                </div>
              </>
            ) : (
              <>
                <p className="small">Signed in as <b>{user.PiID}</b></p>
                <p>Balance: <span className="balance">{balance} π</span></p>
                <div className="form-row">
                  <input className="input-number" type="number" placeholder="Amount π" value={amount} onChange={(e)=>setAmount(e.target.value)} />
                  <button className="btn" onClick={sendPi}>Send</button>
                </div>
                <div className="txlog">
                  {logs.map((l,idx)=>(
                    <div className="tx-item" key={idx}>
                      <div style={{fontSize:12,color:"#9aa6c1"}}>{l.ts}</div>
                      <div>{l.t}</div>
                    </div>
                  ))}
                  {logs.length===0 && <div className="small">No activity yet.</div>}
                </div>
              </>
            )}
            <div className="footer">Pi Testnet — validation-key.txt in /public/</div>
          </div>

          <div className="card">
            <h3>About & Verification</h3>
            <p className="small">Ensure domain is registered in Pi Developer and validation-key.txt exists.</p>
          </div>
        </div>
      </div>
    </>
  );
}
