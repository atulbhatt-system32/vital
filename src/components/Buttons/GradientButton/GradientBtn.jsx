import './GradientBtn.css';
const GradientBtn = (props) => {
  return (
    <button type='button' className='gradient_btn'>
      <span className='gradient_btn-text'>{props.text}</span>
    </button>
  );
};

export default GradientBtn;
