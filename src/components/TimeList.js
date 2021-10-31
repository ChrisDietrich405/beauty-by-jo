export default function TimeList({ onSelectTime }) {
	const arrayOfTimes = ["9:00", "10:00", "11:00", "12:00"];

	return (
		<div className="time-list">
			<div className="time-list-button">
				{arrayOfTimes.map((time) => {
					return (
						<button
							className="time"
							onClick={() => {
								onSelectTime(time);
							}}
    
						>
							{time}
						</button>
					);
				})}
			</div>
		</div>
	);
}
