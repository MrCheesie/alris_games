import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import './TlDraw.css';

const LICENSE_KEY: String = "tldraw-alris-dhanwani-2027-11-02/WyJka0JSY1V0WiIsWyIqLm1yY2hlZXNpZS5naXRodWIuaW8iXSw3MywiMjAyNy0xMS0wMiJd.JqGt37UcG95A8eMypq3wC/n25udjAaev/a4UI8c81lDmE9pErjP+/xXqWAhIuouo/PoO/l6p5moFinZ/Jq7WJw";

export default function App() {
	return (
		<div className="tldraw-wrapper">
			<Tldraw licenseKey={LICENSE_KEY} />
		</div>
	)
}
