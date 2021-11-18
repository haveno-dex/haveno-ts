import React from 'react';
import logo from './logo.png';

import { saveAs } from 'file-saver'

import './App.css';
import {HavenoDaemon} from './HavenoDaemon';
import { Attachment } from './protobuf/pb_pb';



const HAVENO_DAEMON_URL = "http://localhost:8080";
const HAVENO_DAEMON_PASSWORD = "apitest";

class App extends React.Component<{}, {daemonVersion: string, exists: string, accountOpen: string}> {
  
  daemon: HavenoDaemon;
    
  constructor(props: any) {
    super(props);
    this.state = {daemonVersion: "",
				  exists: "",
				  accountOpen: ""};
    this.daemon = new HavenoDaemon(HAVENO_DAEMON_URL, HAVENO_DAEMON_PASSWORD);
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Version {this.state.daemonVersion}
          </p>
          <p>
            Coming soon...
          </p>
		  <div>
			<button
			  onClick={async(e) => await this.accountExits()}>Account Exists
			</button>&nbsp;
			Exists: {this.state.exists}
		  </div>
		  <div>
			<button
			  onClick={async(e) => await this.isAccountOpen()}>Is Account Open
			</button>&nbsp;
			Exists: {this.state.accountOpen}
		  </div>
		  <div>
			<input type="password"></input>&nbsp;
			<button
			  onClick={async(e) => await this.createAccount()}>Create Account
			</button>
		  </div>
		  <div>
			<input type="password"></input>&nbsp;
			<button
			  onClick={async(e) => await this.openAccount()}>Open Account
			</button>
		  </div>
		  <div>
			<button
			  onClick={async(e) => await this.closeAccount()}>Close Account
			</button>
		  </div>
		  <div>
			<button
			  onClick={async(e) => await this.backupAccount()}>Backup Account
			</button>
		  </div>
		  <div>
			<button
			  onClick={async(e) => await this.deleteAccount()}>Delete Account
			</button>
		  </div>
		  <div>
			<input accept=".zip" id="file" multiple={false} type="file" onChange={async(e) => await this.restoreAccount(e.target.files)}/>
			<label htmlFor="file">
				<button
				onClick={e => e.stopPropagation()}>Restore Account
				</button>
			</label>
		  </div>
		  <div>
			<input type="password"></input>&nbsp;
			<button
			  onClick={async(e) => await this.changePassword()}>Change Password
			</button>
		  </div>
          <a
            className="App-link"
            href="https://haveno.exchange"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </header>
      </div>
    );
  }
  
  async componentDidMount() {
    try {
      this.setState({daemonVersion: await this.daemon.getVersion()});
    } catch (err) {
      console.error(err);
      this.setState({daemonVersion: " not available"});
    }
  }

  async accountExits() {
	try {
		let result = await this.daemon.accountExists();
		this.setState({exists: result ? "true" : "false"});
	} catch (err) {
		console.error(err);
	}
  }

  async isAccountOpen() {
	try {
		let result = await this.daemon.isAccountOpen();
		this.setState({accountOpen: result ? "true" : "false"});
	} catch (err) {
		console.error(err);
	}
  }

  async createAccount() {
	try {
		 await this.daemon.createAccount("123456");
	} catch (err) {
		console.error(err);
	}
  }

  async openAccount() {
	try {
		 await this.daemon.openAccount("123456");
	} catch (err) {
		console.error(err);
	}
  }

  async closeAccount() {
	try {
		 await this.daemon.closeAccount();
	} catch (err) {
		console.error(err);
	}
  }

  async backupAccount() {
	try {
		const attachment = await this.daemon.backupAccount();
		if (attachment) {
			const bytes = attachment?.getBytes()
			const blob = new Blob([bytes], {type: "application/octet-stream"});
			saveAs(blob, attachment?.getFileName())
		}
	} catch (err) {
		console.error(err);
	}
  }

  async deleteAccount() {
	try {
		 await this.daemon.deleteAccount();
	} catch (err) {
		console.error(err);
	}
  }

  async restoreAccount(fileList: FileList | null) {
	try {
		if (fileList?.length === 1) {
			const attachment: Attachment = new Attachment();
			attachment.setBytes(new Uint8Array(await fileList[0].arrayBuffer()));
			attachment.setFileName(fileList[0].name);
			await this.daemon.restoreAccount(attachment);
		}
	} catch (err) {
		console.error(err);
	}
  }

  async changePassword() {
	try {
		 await this.daemon.changePassword("abcdefg");
	} catch (err) {
		console.error(err);
	}
  }
}

export default App;
