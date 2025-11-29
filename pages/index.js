import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [piID, setPiID] = useState("");
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [logs, setLogs] = useState([]);
  const APP_WALLET = "GCCHCMOZSM53I4SKWNO6CCJHOH5WXAPRPK3LLTXE6PCQTQWOV54LQVSP";

  useEffect(() => {
    // Optional: try to read window.Pi when component mounts
    if (typeof window !== "undefined" && window.Pi) {
      addLog("Pi SDK detected in window.");
    } else {
      addLog("Pi SDK not detected — open this page from Pi Browser.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addLog = (text) => {
    setLogs((s) => [ { t: text, ts: new Date().toLocaleString() }, ...s ].slice(0, 40));
  };

  const handleAuth = async () => {
    if (!window.Pi) {
      alert("Please open this page inside Pi Browser.");
      return;
    }
    if (!piID) {
      alert("Please enter your Pi ID first.");
      return;
    }
    try {
      addLog("Requesting authentication...");
      const authUser = await window.Pi.authenticate({ PiID: piID });
      setUser(authUser);
      addLog("Authenticated: " + (authUser && authUser.PiID ? authUser.PiID : "unknown"));
      // Balance fetch
      try {
        const userBalance = await window.Pi.getBalance({ PiID: piID });
        setBalance(userBalance);
        addLog("Balance fetched: " + userBalance + " π");
      } catch (be) {
        addLog("Unable to fetch balance: " + (be && be.message ? be.message : be));
      }
    } catch (err) {
      console.error(err);
      addLog("Authentication failed.");
      alert("Authentication failed. Make sure your Pi ID is correct and you are in Pi Browser.");
    }
  };

  const sendPi = async () => {
    if (!window.Pi) {
      alert("Please open in Pi Browser.");
      return;
    }
    if (!user) {
      alert("Login first.");
      return;
    }
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert("Enter a valid amount.");
      return;
    }
    try {
      addLog(`Sending ${amount} π to app wallet...`);
      const tx = await window.Pi.makePayment({
        fromUser: user,
        toApp: APP_WALLET,
        amount: parseFloat(amount),
      });
      addLog("Transaction submitted. TX ID: " + (tx && tx.id ? tx.id : "unknown"));
      // Update balance if possible
      try {
        const updated = await window.Pi.getBalance({ PiID: piID });
        setBalance(updated);
        addLog("Updated balance: " + updated + " π");
      } catch (e) {
        addLog("Could not update balance after tx.");
      }
      setAmount("");
    } catch (err) {
      console.error(err);
      addLog("Transaction failed.");
      alert("Transaction failed. See console/logs.");
    }
  };

  const logout = () => {
    setUser(null);
    setPiID("");
    setBalance(0);
    addLog("User logged out locally.");
  };

  return (
    <>
      <Head>
        <title>Pi Rewards Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Pi SDK (important) */}
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

          <div className="pill">App Wallet: {APP_WALLET.slice(0,6) + "…" + APP_WALLET.slice(-6)}</div>
        </div>

        <div className="grid">
          <div className="card">
            <h3>Connection</h3>
            {!user ? (
              <>
                <p className="small">Login with your Pi ID (testnet)</p>
                <div className="form-row" style={{marginTop:8}}>
                  <input className="input" placeholder="Enter Pi ID" value={piID} onChange={(e)=>setPiID(e.target.value)} />
                  <button className="btn" onClick={handleAuth}>Login</button>
                </div>
                <div style={{marginTop:12}}>
                  <p className="small">If Pi SDK is not detected, open this page inside Pi Browser.</p>
                </div>
              </>
            ) : (
              <>
                <p className="small">Signed in as <b>{user && user.PiID ? user.PiID : "User"}</b></p>
                <p>Balance: <span className="balance">{balance} π</span></p>

                <div className="form-row">
                  <input className="input-number" type="number" placeholder="Amount π" value={amount} onChange={(e)=>setAmount(e.target.value)} />
                  <button className="btn" onClick={sendPi}>Send</button>
                  <button className="btn secondary" onClick={logout}>Logout</button>
                </div>

                <div className="txlog">
                  <h4 style={{marginTop:12}}>Activity</h4>
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
            <div className="footer">Built for Pi Testnet — Make sure verification key is in <code>/public/validation-key.txt</code></div>
          </div>

          <div className="card">
            <h3>About & Verification</h3>
            <p className="small">
              This app is prepared to be verified by Pi Developer (PiNet).
              Ensure your domain is the one you register in Pi Developer and the <code>validation-key.txt</code> file matches exactly.
            </p>

            <hr style={{margin:"14px 0",border:"none",height:1,background:"rgba(255,255,255,0.03)"}} />

            <h4>Quick checks</h4>
            <ul className="small">
              <li>Open inside Pi Browser (mobile).</li>
              <li>Verification file: <b>/public/validation-key.txt</b></li>
              <li>App Wallet set to the configured wallet.</li>
              <li>Deploy on Vercel and set the domain to Pi Developer for verification.</li>
            </ul>

            <div style={{marginTop:12}}>
              <a className="btn" href="https://developers.minepi.com/" target="_blank" rel="noreferrer">Pi Developers</a>
            </div>
          </div>
        </div>

        <div style={{marginTop:18,textAlign:"center",color:"#9aa6c1"}}>
          <div>© Pi Rewards Hub — Testnet</div>
          <div style={{marginTop:6}} className="small">Privacy · Terms</div>
        </div>
      </div>
    </>
  );
}


---
