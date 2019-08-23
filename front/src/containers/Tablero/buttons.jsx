import React from 'react'

export default ({ playButton, pauseButton, clear }) => {
	return (
		<div style={{ textAlign: "center" }}>
			<div id='botones' style={{ display: "flex", justifyContent: "center" }}>
				<button className="btn btn-primary" style={{ margin: "3px" }} onClick={playButton}>
					Jugar
					</button>
				<button className="btn btn-warning" style={{ margin: "3px" }} onClick={pauseButton}>
					Pausa
					</button>
				<button className="btn btn-danger" style={{ margin: "3px" }} onClick={clear}>
					Limpiar
					</button>
			</div>
		</div>
	)
}