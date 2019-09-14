import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const value = 0.66;

const circleBarComponent = () => (
    <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />
    );

export default circleBarComponent;