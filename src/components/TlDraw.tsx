import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import './TlDraw.css';

const LICENSE_KEY: String = "tldraw-2026-11-14/WyJRNnBMeVh2VyIsWyIqIl0sMTYsIjIwMjYtMTEtMTQiXQ.jZ8yka9PZ1CwEy0gWghBxi9EZoS7rxSuebsjtee+XA+cQVE58Y5sKDYuJv+eTM5tuTBxIWtdmqC+2PxINY++4w";

export default function App() {
	return (
		<div className="tldraw-wrapper">
			<Tldraw licenseKey={LICENSE_KEY} />
		</div>
	)
}
