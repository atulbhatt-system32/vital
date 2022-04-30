import './BasicCard.css';

const BasicCard = (props) => {
  console.log(props, 'props');
  return (
    <div className='card'>
      <div className='card_body'>{props.children}</div>
    </div>
  );
};

export default BasicCard;
