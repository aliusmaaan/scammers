import logo from './logo.svg';
import './App.css';
import BasicTable from './table';

function App() {
  return (
    <div className="App">
      <audio controls>
  {/* <source src="https://infoedge-my.sharepoint.com/personal/akash_s3_infoedge_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fakash%5Fs3%5Finfoedge%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FCall%20recording%20Vaibhav%20Raj%20%2D%20InfoEdge%5F231006%5F105105%2Em4a&referrer=Teams%2ETEAMS%2DWEB&referrerScenario=p2p%5Fns%2Dbim&ga=1" type="audio/m4a" /> */}
  {/* <source src="../media/sample.mp3" type="audio/mpeg" /> */}
  <source src="file:///home/fa064130/Git/my-app/media/sample.mp3" type="audio/mpeg" />
  {/* <source src="/home/fa064130/Git/my-app/media" type="audio/mpeg" /> */}
  {/* Your browser does not support the audio element. */}
</audio>
      <header className="App-header">
      <BasicTable />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
